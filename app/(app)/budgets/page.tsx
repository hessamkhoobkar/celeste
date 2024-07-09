import BudgetForm from "@/components/budget-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

export default function BudgetsPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <Alert variant="primary">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Work in progress!</AlertTitle>
        <AlertDescription className="text-foreground">
          This page is still under development. user should be able to add a
          budget for each category and edit them.
        </AlertDescription>
      </Alert>

      <Card className="w-full border-transparent shadow">
        <CardHeader>
          <CardTitle>Total Budget</CardTitle>
        </CardHeader>
        <CardContent>
          <BudgetForm />
        </CardContent>
      </Card>
    </div>
  );
}
