import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-5 grid-rows-1 gap-4 p-4">
      <Card className="col-span-2 row-span-1">
        <CardHeader>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="pt-16">{children}</CardContent>
      </Card>
      <section className="col-span-3 row-span-1">
        <span>Some thing</span>
      </section>
    </div>
  );
}
