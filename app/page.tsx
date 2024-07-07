import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-2">
        <Button>Click me</Button>
        <ThemeToggle />
      </div>
    </main>
  );
}
