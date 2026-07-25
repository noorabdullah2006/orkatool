import Image from "next/image";

export default function Logo() {
  return (
    <div className="site-logo" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Image
        src="/logo.png"
        alt="OrkaTool Logo"
        width={32}
        height={32}
        style={{ display: "block", width: "auto", height: "100%", maxHeight: "2rem" }}
        priority
      />
      <span>OrkaTool</span>
    </div>
  );
}