"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { createClient } from "@/lib/supabase/client";
import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";

import { Expense, columns } from "./columns";
import { DataTable } from "./data-table";

export default function ExpensesPage() {
  const supabase = createClient();

  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState<Expense[] | []>([]);

  useEffect(() => {
    async function getExpenses() {
      let { data: expenses, error } = await supabase
        .from("expenses")
        .select(
          `*, categories (
          id,
          name
        )`,
        )
        .order("expense_date", { ascending: false });

      if (error) {
        console.error(error);
      }

      const typedExpenses = expenses as Expense[];

      if (expenses) {
        setLoading(false);
        setExpenses(typedExpenses);
      }
    }

    getExpenses();
  }, [supabase]);

  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-2xl font-black">Expenses</h1>
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        {loading ? (
          <ExpensesLoading />
        ) : expenses.length > 0 ? (
          <DataTable columns={columns} data={expenses} />
        ) : (
          <ExpensesEmptyState />
        )}
      </div>
    </div>
  );
}

function ExpensesLoading() {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div className="flex gap-2">
          <Skeleton className="h-8 w-[256px]" />
          <Skeleton className="h-8 w-[115px]" />
        </div>
        <Skeleton className="h-8 w-[120px]" />
      </div>
      <div className="overflow-hidden rounded-md border">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-around gap-4 border-b border-border bg-card p-6"
          >
            <Skeleton className="h-4 w-[60px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpensesEmptyState() {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-card p-8 shadow">
      <div className="flex flex-col items-center justify-center gap-2">
        <Wallet className="h-12 w-12" />
        <p className="text-2xl font-bold">No expenses found</p>
        <p className="text-foreground/60">
          {" "}
          Add one by clicking the button above
        </p>
      </div>
    </div>
  );
}
