"use client";

import { Button } from "@/components/ui/button";

import { GoogleIcon } from "@/assets/icons/google-icon";
import { GithubIcon } from "@/assets/icons/github-icon";
import { GitlabIcon } from "@/assets/icons/gitlab-icon";

export default function OAuth() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-2">
      <Button variant="outline" size="lg" className="h-12 w-full gap-2">
        <GoogleIcon className="h-6 w-6" />
        <span>Sign in with Google</span>
      </Button>
      <Button variant="outline" size="lg" className="h-12 w-full gap-2">
        <GithubIcon className="h-6 w-6" />
        <span>Sign in with GitHub</span>
      </Button>
      <Button variant="outline" size="lg" className="h-12 w-full gap-2">
        <GitlabIcon className="h-6 w-6" />
        <span>Sign in with GitLab</span>
      </Button>
    </section>
  );
}
