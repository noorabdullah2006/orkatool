import Input from "@/components/ui/input";

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "60px auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Input
        id="name"
        label="Your Name"
        placeholder="Enter your name"
      />

      <Input
        id="email"
        type="email"
        label="Email"
        helperText="We'll never share your email."
      />

      <Input
        id="password"
        type="password"
        label="Password"
        error="Password is required."
      />

      <Input
        placeholder="Full Width"
        fullWidth
      />
    </main>
  );
}