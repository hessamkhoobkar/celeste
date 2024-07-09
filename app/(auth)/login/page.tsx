import OAuth from "@/components/auth/oauth";
import { Separator } from "@/components/ui/separator";
import DemoAccounts from "@/components/auth/demo-accounts";
import AuthHead from "@/components/auth/head";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

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

      <Alert variant="primary">
        <Terminal className="h-4 w-4" />
        <AlertTitle>All data are shared</AlertTitle>
        <AlertDescription className="text-foreground">
          All the data are shared between all the users. This is for the
          convienience of the demo users.
        </AlertDescription>
      </Alert>
    </div>
  );
}
