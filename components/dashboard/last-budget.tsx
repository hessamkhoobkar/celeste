"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useMemo } from "react";

const chartConfig = {
  expenses: {
    label: "expenses",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function LastBudget({
  budget,
  expenses,
}: {
  budget: number;
  expenses: number;
}) {
  const chartData = [
    { browser: "safari", expenses: expenses, fill: "var(--color-safari)" },
  ];

  const remainingBudget = useMemo(() => {
    const n = expenses - budget;
    return Math.round(n * 100) / 100;
  }, [budget, expenses]);

  const expensesPercentage = useMemo(() => {
    const n = (expenses * 100) / budget;
    const expensesPercentage = (360 * n) / 100;

    return expensesPercentage;
  }, [budget, expenses]);

  console.log(expensesPercentage);

  return (
    <Card className="flex w-1/3 flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Last Month Review</CardTitle>
        <CardDescription>June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={expensesPercentage}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="expenses" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {chartData[0].expenses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          expenses
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <p>{remainingBudget > 0 ? "Budget exhausted:" : "Remaining budget:"}</p>
        <p className="mt-1 text-xs">
          <span className="text-foreground/50">
            You are {remainingBudget > 0 ? "over budget" : "under budget"} by
          </span>
          <span
            className={`ms-2 font-bold ${remainingBudget > 0 ? "text-red-500" : ""}`}
          >
            ${remainingBudget > 0 ? remainingBudget : remainingBudget * -1}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
