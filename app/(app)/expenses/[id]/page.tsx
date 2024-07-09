"use client";

import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ExpensesForm from "../expenses-form";
import { expenseSchema } from "@/lib/zod";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

interface CategoryType {
  id: number;
  name: string;
}

const categoriesDict: Record<string, number> = {
  Housing: 1,
  Transportation: 2,
  Food: 3,
  Healthcare: 4,
  "Personal Care and Clothing": 5,
  "Entertainment and Recreation": 6,
  "Childcare and Education": 7,
  Insurance: 8,
  "Savings and Debt Payments": 9,
  Miscellaneous: 11,
};

export default function ExpensePage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const router = useRouter();

  const [expenseData, setExpenseData] = useState<ExpenseType>();
  const [allCategories, setAllCategories] = useState<any[]>([]);

  async function editExpense(values: z.infer<typeof expenseSchema>) {
    // ✅ This will be type-safe and validated.

    const { data, error } = await supabase
      .from("expenses")
      .update([
        {
          category: categoriesDict[values.category],
          amount: values.amount,
          expense_date: values.date,
          description: values.description,
        },
      ])
      .eq("id", params.id)
      .select();

    if (error) {
      console.log(error);
    }

    if (data) {
      router.push("/expenses");
    }
  }

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");

      setAllCategories(data as CategoryType[]);
    }

    fetchCategories();

    async function fetchExpense() {
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", params.id)
        .single();

      setExpenseData(data as ExpenseType);
    }

    fetchExpense();
  }, [params.id, supabase]);

  async function deleteExpense() {
    const { error } = await supabase
      .from("expenses")
      .delete()
      .eq("id", params.id);

    if (error) {
      console.log(error);
    }

    if (!error) {
      router.push("/expenses");
    }
  }

  return (
    <Card className="border-transparent shadow">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Expense: </CardTitle>
        <div className="flex gap-2">
          <Button
            onClick={() => deleteExpense()}
            variant="outline"
            size="icon"
            disabled
          >
            <Pencil className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => deleteExpense()}
            variant="outline"
            size="icon"
            className="hover:border-red-500 hover:bg-red-500/10 hover:text-red-500"
          >
            <Trash className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ExpensesForm
          categories={allCategories}
          onSubmit={editExpense}
          edit={true}
          expenseseData={expenseData}
        />
      </CardContent>
    </Card>
  );
}
