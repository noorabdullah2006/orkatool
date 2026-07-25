import Container from "@/components/layout/container/container";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Container>
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Tool Not Found</h1>
        <p className="not-found-text">
          Oops! The calculator or tool you requested does not exist or may have been removed. Please check the URL or browse our directory.
        </p>
        <div className="not-found-actions">
          <Link href="/tools" className="button button--primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <ArrowLeft size={18} /> Browse All Tools
          </Link>
          <Link href="/" className="button button--secondary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            <Home size={18} /> Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}