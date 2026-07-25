"use client";

import { useMemo, useState } from "react";

import type { Tool } from "@/content/tools";

import CategorySearch from "./category-search";
import CategoryGrid from "./category-grid";

type Props = {
  tools: Tool[];
};

export default function CategoryTools({
  tools,
}: Props) {
  const [search, setSearch] =
    useState("");

  const filteredTools =
    useMemo(() => {

      const keyword =
        search
          .toLowerCase()
          .trim();

      if (!keyword) {

        return tools;

      }

      return tools.filter(
        (tool) =>

          tool.title
            .toLowerCase()
            .includes(keyword) ||

          tool.description
            .toLowerCase()
            .includes(keyword),

      );

    }, [search, tools]);

  return (

    <>

      <CategorySearch
        value={search}
        onChange={setSearch}
      />

      <CategoryGrid
        tools={filteredTools}
      />

    </>

  );

}