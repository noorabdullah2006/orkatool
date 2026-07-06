const tools = [
  "BMI Calculator",
  "Age Calculator",
  "Unit Converter",
  "Percentage Calculator",
  "Currency Converter",
];

export default function HeroPreview() {
  return (
    <aside className="hero-preview">

      <div className="hero-preview-header">
        🔥 Popular Tools
      </div>

      <ul className="hero-preview-list">
        {tools.map((tool) => (
          <li key={tool} className="hero-preview-item">
            {tool}
          </li>
        ))}
      </ul>

    </aside>
  );
}