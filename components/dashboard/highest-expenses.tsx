import { Card, CardContent } from "@/components/ui/card";

export default function HighestExpenses({
  expenses,
}: {
  expenses: {
    id: string;
    amount: number;
    expense_date: string;
    categories: {
      id: string;
      name: string;
    };
  }[];
}) {
  const highestExpenses = expenses.reduce((max, current) => {
    return current.amount > max.amount ? current : max;
  }, expenses[0]);
  return (
    <Card className="w-1/2">
      <CardContent className="flex flex-1 items-center justify-start gap-4 p-4">
        <div className="h-12 w-12 rounded-md bg-primary"></div>
        <div className="flex flex-col">
          <p>
            Your single highest exchange is
            <span className="ms-2 text-violet-500">
              ${highestExpenses.amount}
            </span>
          </p>
          <p className="text-sm text-foreground/50">
            It is for {highestExpenses.categories.name}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
