import Container from "@/components/layout/container/container";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Container>
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-text">
          Oops! The page you are looking for doesn&apos;t exist or has been moved. Use the buttons below to head back page-side.
        </p>
        <div className="not-found-actions">
          <Link href="/" className="button button--primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Home size={18} /> Back to Home
          </Link>
          <Link href="/tools" className="button button--secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={18} /> View All Tools
          </Link>
        </div>
      </Container>
    </main>
  );
}
