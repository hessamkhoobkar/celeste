"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { GoogleIcon } from "@/assets/icons/google-icon";
import { GithubIcon } from "@/assets/icons/github-icon";
import { GitlabIcon } from "@/assets/icons/gitlab-icon";

export default function OAuth() {
  const supabase = createClient();
  const router = useRouter();

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `http://example.com/auth/callback`,
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
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://example.com/auth/callback`,
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
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "gitlab",
      options: {
        redirectTo: `http://example.com/auth/callback`,
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
        disabled
        onClick={() => signInWithGoogle()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        <GoogleIcon className="h-6 w-6" />
        <span>Sign in with Google</span>
      </Button>
      <Button
        disabled
        onClick={() => signInWithGithub()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        <GithubIcon className="h-6 w-6" />
        <span>Sign in with GitHub</span>
      </Button>
      <Button
        disabled
        onClick={() => signInWithGitlab()}
        variant="outline"
        size="lg"
        className="h-12 w-full gap-2"
      >
        <GitlabIcon className="h-6 w-6" />
        <span>Sign in with GitLab</span>
      </Button>
    </section>
  );
}
