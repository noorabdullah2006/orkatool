import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import Hero from "@/components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Header />

      <Main>
        {/* Hero */}
        <Hero />

        {/* Container Test */}
        <Section>
          <Container>
            <h2>🧪 Layout Components Test</h2>

            <p>
              This section is used to verify reusable layout components.
            </p>
          </Container>
        </Section>

        {/* Section Test */}
        <Section>
          <Container>
            <h2>Section Component</h2>

            <p>
              If spacing looks correct then Section component is working.
            </p>
          </Container>
        </Section>

        {/* Cards Test */}
        <Section>
          <Container>
            <h2>Card Test</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: "24px",
                marginTop: "24px",
              }}
            >
              <div className="card">
                <h3>Calculator</h3>
                <p>Reusable Card UI</p>
              </div>

              <div className="card">
                <h3>Converter</h3>
                <p>Reusable Card UI</p>
              </div>

              <div className="card">
                <h3>Generator</h3>
                <p>Reusable Card UI</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Button Test */}
        <Section>
          <Container>
            <h2>Buttons</h2>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <button className="header-tools-btn">
                Primary Button
              </button>

              <button className="search-button">
                Search Button
              </button>

              <button className="mobile-menu-button">
                ☰
              </button>
            </div>
          </Container>
        </Section>
      </Main>

      <Footer />
    </>
  );
}