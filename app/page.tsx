import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <main
      style={{
        padding: "40px",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <Button>
        Primary
      </Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="outline">
        Outline
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>

      <Button variant="success">
        Success
      </Button>

      <Button variant="warning">
        Warning
      </Button>

      <Button variant="danger">
        Danger
      </Button>

      <Button loading>
        Saving...
      </Button>

      <Button
        size="sm"
      >
        Small
      </Button>

      <Button
        size="lg"
      >
        Large
      </Button>

      <Button fullWidth>
        Full Width Button
      </Button>
    </main>
  );
}