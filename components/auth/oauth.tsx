"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { GoogleIcon } from "@/assets/icons/google-icon";
import { GithubIcon } from "@/assets/icons/github-icon";
import { GitlabIcon } from "@/assets/icons/gitlab-icon";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export default function OAuth() {
  const supabase = createClient();
  const router = useRouter();

  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [gitlabLoading, setGitlabLoading] = useState(false);

  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000";

  async function signInWithGithub() {
    setGithubLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${BASE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      router.push("/");
    }
  }

  async function signInWithGoogle() {
    setGoogleLoading(true);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${BASE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      router.push("/");
    }
  }

  async function signInWithGitlab() {
    setGitlabLoading(true);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "gitlab",
      options: {
        redirectTo: `${BASE_URL}/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      router.push("/");
    }
  }

  return (
    <section className="flex w-full flex-col items-center justify-center gap-2">
      <Button
        onClick={() => signInWithGoogle()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        {googleLoading ? (
          <>
            <LoaderCircle className="animate-spin" />
            <span className="text-xs">Logging in...</span>
          </>
        ) : (
          <>
            <GoogleIcon className="h-6 w-6" />
            <span>Sign in with Google</span>
          </>
        )}
      </Button>
      <Button
        onClick={() => signInWithGithub()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        {githubLoading ? (
          <>
            <LoaderCircle className="animate-spin" />
            <span className="text-xs">Logging in...</span>
          </>
        ) : (
          <>
            <GithubIcon className="h-6 w-6" />
            <span>Sign in with GitHub</span>
          </>
        )}
      </Button>
      <Button
        onClick={() => signInWithGitlab()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        {gitlabLoading ? (
          <>
            <LoaderCircle className="animate-spin" />
            <span className="text-xs">Logging in...</span>
          </>
        ) : (
          <>
            <GitlabIcon className="h-6 w-6" />
            <span>Sign in with GitLab</span>
          </>
        )}
      </Button>
    </section>
  );
}
