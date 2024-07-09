import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import Header from "@/components/layout/header";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col gap-4 py-4">
      <Header />
      <section>{children}</section>
    </div>
  );
}
