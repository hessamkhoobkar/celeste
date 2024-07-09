"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const colors = [
  { fill: "var(--color-transportation)" },
  { fill: "var(--color-food)" },
  { fill: "var(--color-personalCare)" },
  { fill: "var(--color-childcare)" },
  { fill: "var(--color-savings)" },
  { fill: "var(--color-healthcare)" },
  { fill: "var(--color-entertainment)" },
  { fill: "var(--color-miscellaneous)" },
];

const chartConfig = {
  categoryAmount: {
    label: "category Amount",
  },
  transportation: {
    label: "Transportation",
    color: "#e4d7fb",
  },
  food: {
    label: "Food",
    color: "#cab0f8",
  },
  personalCare: {
    label: "Personal Care",
    color: "#b088f4",
  },
  childcare: {
    label: "Childcare",
    color: "#9661f1",
  },
  savings: {
    label: "Savings",
    color: "#7c3aed",
  },
  healthcare: {
    label: "Healthcare",
    color: "#632ebe",
  },
  entertainment: {
    label: "Entertainment",
    color: "#4b238f",
  },
  miscellaneous: {
    label: "Miscellaneous",
    color: "#321760",
  },
} satisfies ChartConfig;

export default function ExpensescategoryName({
  categoriesAmount,
}: {
  categoriesAmount: {
    categoryName: string;
    categoryAmount: number;
  }[];
}) {
  colors.forEach((item, index) => {
    Object.assign(categoriesAmount[index], { fill: item.fill });
  });
  return (
    <Card className="flex w-1/3 flex-col">
      <CardHeader className="pb-1">
        <CardTitle>Your current expenses</CardTitle>
        <CardDescription>July 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="categoryName" />}
            />
            <Pie
              data={categoriesAmount}
              dataKey="categoryAmount"
              nameKey="categoryName"
              innerRadius={60}
              strokeWidth={5}
            ></Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
