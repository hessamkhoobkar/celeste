import CategoryBadge from "@/components/utils/category-badge";
import { Card, CardContent } from "./ui/card";
import { DateCalc } from "@/lib/utils";

export default function ExpenseCard({
  amount,
  categories,
  description,
  expense_date,
  id,
}: {
  amount: number;
  categories: { id: number; name: string };
  description: string;
  expense_date: string;
  id: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 pt-4">
        <div className="flex justify-between">
          <p className="text-lg">${amount}</p>
          <CategoryBadge id={categories?.id} label={categories?.name} />
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-foreground/60">{description}</p>
          <p className="text-sm">{DateCalc(expense_date)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
