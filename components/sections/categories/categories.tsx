import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import CategoriesHeader from "./categories-header";
import CategoriesGrid from "./categories-grid";

export default function Categories() {
  return (
    <Section className="categories" ariaLabel="Tool Categories">
      <Container>

        <CategoriesHeader />

        <CategoriesGrid />

      </Container>
    </Section>
  );
}