import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="footer-brand">

      <div className="footer-logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Image
          src="/logo.png"
          alt="OrkaTool Logo"
          width={32}
          height={32}
          style={{ display: "block", width: "auto", height: "100%", maxHeight: "2rem" }}
        />
        <span>OrkaTool</span>
      </div>

      <p className="footer-description">
        Free online calculators, converters, developer tools,
        productivity tools and utilities designed to be fast,
        accurate and easy to use.
      </p>

    </div>
  );
}