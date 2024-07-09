import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CategoriesPage() {
  return (
    <div>
      <Alert variant="primary">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Work in progress!</AlertTitle>
        <AlertDescription className="text-foreground">
          This page is still under development. user should be able to add and
          edit categories.
        </AlertDescription>
      </Alert>
    </div>
  );
}
