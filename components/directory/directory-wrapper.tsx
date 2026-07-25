"use client";

import { useMemo, useState } from "react";
import type { Tool } from "@/content/tools";
import type { Category } from "@/content/categories";
import CategoryCard from "../../components/category/tool-category-card";
import EmptyState from "@/components/shared/empty-state";
import { Search } from "lucide-react";

interface DirectoryWrapperProps {
  initialTools: Tool[];
  categories: Category[];
}

export default function DirectoryWrapper({
  initialTools,
  categories,
}: DirectoryWrapperProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("az");

  const filteredTools = useMemo(() => {
    let result = [...initialTools];

    // Filter by Category
    if (activeCategory !== "all") {
      result = result.filter((tool) => tool.category === activeCategory);
    }

    // Filter by Search Query
    const query = search.toLowerCase().trim();
    if (query) {
      result = result.filter(
        (tool) =>
          tool.title.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.keywords.some((kw) => kw.toLowerCase().includes(query)) ||
          tool.slug.toLowerCase().includes(query)
      );
    }

    // Sort
    if (sortBy === "az") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    } else if (sortBy === "popular") {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return result;
  }, [initialTools, search, activeCategory, sortBy]);

  return (
    <div className="directory-container">
      {/* Controls */}
      <div className="directory-header-controls">
        <div className="directory-search-wrapper">
          <Search className="directory-search-icon" size={18} />
          <input
            type="text"
            placeholder="Search by name, description, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="directory-search-input"
          />
        </div>

        <div className="directory-sort-wrapper">
          <label htmlFor="sort" className="directory-sort-label">
            Sort By
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="directory-sort-select"
          >
            <option value="az">A to Z</option>
            <option value="newest">Newest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="directory-tabs">
        <button
          onClick={() => setActiveCategory("all")}
          className={`directory-tab-button ${
            activeCategory === "all" ? "active" : ""
          }`}
        >
          All ({initialTools.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.slug)}
            className={`directory-tab-button ${
              activeCategory === cat.slug ? "active" : ""
            }`}
          >
            {cat.title} ({cat.totalTools})
          </button>
        ))}
      </div>

      {/* Count Info */}
      <div className="directory-meta-info">
        <span className="directory-count">
          Showing {filteredTools.length}{" "}
          {filteredTools.length === 1 ? "tool" : "tools"}
        </span>
      </div>

      {/* Grid or Empty state */}
      {filteredTools.length === 0 ? (
        <EmptyState
          title={search ? "No Tools Found" : "Coming Soon"}
          description={
            search
              ? `We couldn't find any tools matching "${search}". Try searching for something else.`
              : "We are currently developing tools for this category. Stay tuned, they will check-in soon!"
          }
        />
      ) : (
        <div className="category-grid">
          {filteredTools.map((tool) => (
            <CategoryCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
