"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Database } from "@/types/database.types";
import { LoaderCircle } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  amount: z.preprocess(
    (val) => Number(val),
    z.number().min(0, {
      message: "Budget amount must be at least 100 bucks.",
    }),
  ),
});

export default function BudgetForm() {
  const supabase = createClient<Database>();

  const [budgetId, setBudgetId] = useState<string | null>(null);
  const [request, setRequest] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 0,
    },
  });

  async function updateBudget(amount: number) {
    const { data: budget, error } = await supabase
      .from("budgets")
      .update({ amount: amount })
      .eq("id", budgetId)
      .select();

    if (budget) {
      setRequest(false);
      form.setValue("amount", budget[0].amount);

      toast({
        title: "Budget got updated!",
        description: new Date().toLocaleDateString(undefined, {
          hour: "numeric",
          minute: "numeric",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      });
    }
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setRequest(true);
    updateBudget(data.amount);
  }

  useEffect(() => {
    async function fetchBudget() {
      let { data: budget, error } = await supabase
        .from("budgets")
        .select("*")
        .single();

      if (error) {
        toast({
          title: "Error fetching budget:",
          description: error.message,
        });
        return;
      }

      return budget;
    }

    fetchBudget().then((budget) => {
      setBudgetId(budget.id);
      form.setValue("amount", budget.amount);
    });

    setLoading(false);
  }, []);

  return loading ? (
    <div className="flex flex-col items-start justify-start gap-6">
      <div className="flex flex-col items-start justify-start gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-80" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        <Skeleton className="h-8 w-28" />
      </div>
    </div>
  ) : (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Amount:</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Amount" {...field} />
                </FormControl>
                <FormDescription>
                  This is your total budget for the month.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={request}>
            {request ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                <span>Updating...</span>
              </>
            ) : (
              "Update"
            )}
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  );
}
