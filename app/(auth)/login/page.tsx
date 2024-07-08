import OAuth from "@/components/auth/oauth";
import { Separator } from "@/components/ui/separator";
import DemoAccounts from "@/components/auth/demo-accounts";
import AuthHead from "@/components/auth/head";

export default function LoginPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <AuthHead />
      <OAuth />
      <Separator className="relative my-8">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-card px-4 text-sm">
          or
        </span>
      </Separator>
      <DemoAccounts />
    </div>
  );
}
