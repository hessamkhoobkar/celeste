import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { get } from "http";

export default async function ProfilePage() {
  const supabase = createClient();
  let profile;

  const { data, error: authError } = await supabase.auth.getUser();
  if (authError || !data?.user) {
    redirect("/login");
  }

  async function getProfile() {
    let { data: resProfile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user?.id)
      .single();

    return {
      ...resProfile,
      email: data.user?.email,
    };
  }

  profile = await getProfile();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          These are read-only details for your account. This is to pervent edits
          on demo accounts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Full Name</Label>
            <Input value={profile?.full_name} disabled />
          </div>
          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input value={profile?.email} disabled />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button disabled>Submit</Button>
      </CardFooter>
    </Card>
  );
}
