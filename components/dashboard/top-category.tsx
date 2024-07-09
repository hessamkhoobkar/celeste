import { Card, CardContent } from "@/components/ui/card";

export default function TopCategory({
  categoriesAmount,
}: {
  categoriesAmount: {
    categoryName: string;
    categoryAmount: number;
  }[];
}) {
  const highestAmountObject = categoriesAmount.reduce((max, current) => {
    return current.categoryAmount > max.categoryAmount ? current : max;
  }, categoriesAmount[0]);

  return (
    <Card className="w-1/2">
      <CardContent className="flex flex-1 items-center justify-start gap-4 p-4">
        <div className="h-12 w-12 rounded-md bg-primary"></div>
        <div className="flex flex-col">
          <p>
            You have spent ${highestAmountObject.categoryAmount} on
            <span className="ms-2 text-violet-500">
              {highestAmountObject.categoryName}
            </span>
          </p>
          <p className="text-sm text-foreground/50">
            Your highest spending amount in a category
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
