"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignoOut() {
  const supabase = createClient();
  const router = useRouter();

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    }

    router.push("/login");
  }

  return <button onClick={signOut}>Sign out</button>;
}
