"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export async function login() {
  const supabase = createClient();

  // DO NOT USE THIS IN PRODUCTION
  //
  // This is against any fundemtals of security
  // This is absurd and should not be used
  // Only use this for this demo purpose only
  //
  // DO NOT USE THIS IN PRODUCTION

  const data = {
    email: "jenniferttran@dayrep.com",
    password: "Iem4XohH",
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
