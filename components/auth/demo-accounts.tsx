"use client";

import { login } from "@/app/(auth)/login/actions";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function DemoAccounts() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="flex w-full flex-col items-start justify-center gap-4">
      <p className="ps-2 text-sm">
        Use the demo-account to login with excisting data:
      </p>
      <form className="w-full">
        <Card className="w-full">
          <CardContent className="flex w-full flex-row justify-between p-4">
            <div className="flex gap-2">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src="/img/jen-profile.jpg"
                  alt="Jennifer T. Tran"
                  asChild
                >
                  <Image
                    src="/img/jen-profile.jpg"
                    alt="Jennifer T. Tran"
                    fill
                    className="h-12 w-12"
                  />
                </AvatarImage>
                <AvatarFallback className="h-12 w-12">JT</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-2">
                <p>Jennifer T. Tran</p>
                <p className="text-xs font-bold text-foreground/70">
                  JenniferTTran@dayrep.com
                </p>
              </div>
            </div>
            <Button
              size="lg"
              formAction={login}
              className="gap-2"
              onClick={() => setLoading(true)}
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  <span className="text-xs">Logging in...</span>
                </>
              ) : (
                <span>Log in</span>
              )}
            </Button>
          </CardContent>
        </Card>
      </form>
    </section>
  );
}
