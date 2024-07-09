"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, User } from "lucide-react";

interface Profile {
  avatar_url: string;
  full_name: string;
  id: string;
  updated_at: string;
  username: string;
  email: string;
}

export default function ProfileMenu() {
  const supabase = createClient();
  const router = useRouter();

  const [profile, setProfile] = useState<Profile>();

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    }

    router.push("/login");
  }

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      let { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

      setProfile({
        ...profile,
        email: user?.email,
      });
    }

    getUser();
  }, [supabase]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={profile?.avatar_url} alt="@shadcn" />
          <AvatarFallback>
            {profile?.full_name.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>{profile?.full_name}</span>
          <span className="text-xs text-ink-500">{profile?.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href="/profile" passHref>
              <span className="flex w-full items-start">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={signOut} className="cursor-pointer">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
