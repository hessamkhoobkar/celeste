import WelcomeMessage from "@/components/auth/welcome-message";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 grid-rows-2 gap-2 md:p-4 lg:grid-cols-5 lg:grid-rows-1">
      <Card className="col-span-1 row-span-1 lg:col-span-2">
        <CardHeader>
          <ThemeToggle />
        </CardHeader>
        <CardContent className="pt-16">{children}</CardContent>
      </Card>
      <WelcomeMessage />
    </div>
  );
}
