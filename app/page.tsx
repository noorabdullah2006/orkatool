import Hero from "@/components/sections/hero";
import Categories from "@/components/sections/categories";
import PopularTools from "@/components/sections/popular-tools";
import WhyChoose from "@/components/sections/why-choose/why-choose";
import LatestArticles from "@/components/sections/latest-articles/latest-articles";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Categories />

      <PopularTools />
      <WhyChoose />

      <LatestArticles />
    </>
  );
}

