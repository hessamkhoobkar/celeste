"use client";

import { z } from "zod";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ExpensesForm from "../expenses-form";
import { expenseSchema } from "@/lib/zod";

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

export default function NewExpensePage() {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<any>();
  const [allCategories, setAllCategories] = useState<any[]>([]);

  async function addExpense(values: z.infer<typeof expenseSchema>) {
    // ✅ This will be type-safe and validated.

    const { data, error } = await supabase
      .from("expenses")
      .insert([
        {
          created_by: user.id,
          category: categoriesDict[values.category],
          amount: values.amount,
          expense_date: values.date,
          description: values.description,
        },
      ])
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

    async function fetchUser() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      setUser(user);
    }
    fetchUser();
  }, [supabase]);

  return (
    <Card className="border-transparent shadow">
      <CardHeader>
        <CardTitle>New Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <ExpensesForm
          categories={allCategories}
          onSubmit={addExpense}
          edit={false}
        />
      </CardContent>
    </Card>
  );
}
