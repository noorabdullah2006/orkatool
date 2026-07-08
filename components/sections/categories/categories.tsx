import Container from "@/components/layout/container";

import CategoriesHeader from "./categories-header";
import CategoriesGrid from "./categories-grid";

export default function Categories() {
  return (
    <section className="section categories">
      <Container>

        <CategoriesHeader />

        <CategoriesGrid />

      </Container>
    </section>
  );
}