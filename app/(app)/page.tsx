import { createClient } from "@/lib/supabase/server";

import ExpensesCategory from "@/components/dashboard/expenses-category";
import LastBudget from "@/components/dashboard/last-budget";
import CurrentBudget from "@/components/dashboard/current-budget";
import TopCategory from "@/components/dashboard/top-category";
import HighestExpenses from "@/components/dashboard/highest-expenses";

interface ExpenseType {
  id: string;
  amount: number;
  expense_date: string;
  categories: {
    id: string;
    name: string;
  };
}

export default async function Home() {
  const supabase = createClient();

  const loading = false;
  const julyCategoriesAmount: {
    categoryName: string;
    categoryAmount: number;
  }[] = [];

  let { data: budget, error: budgetError } = await supabase
    .from("budgets")
    .select("*")
    .single();

  let { data: expenses, error: expensesError } = await supabase.from("expenses")
    .select(`*, categories (
    id,
    name
  )`);

  if (expensesError) {
    console.log(expensesError);
  }

  if (budgetError) {
    console.log(budgetError);
  }

  if (!loading && expenses === null) {
    return <div>Loading...</div>;
  }

  // Get monthly expenses
  const juneExpenses = expenses?.filter(
    (item) =>
      item.expense_date < "2024-07-01T00:00:00.000Z" &&
      item.expense_date > "2024-06-01T00:00:00.000Z",
  );
  const julyExpenses = expenses?.filter(
    (item) => item.expense_date > "2024-07-01T00:00:00.000Z",
  );

  const juneExpensesAmount = juneExpenses
    ?.reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);
  const julyExpensesAmount = julyExpenses
    ?.reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2);

  if (julyExpenses) {
    julyExpenses.forEach((item) => {
      const categoryName = item.categories.name;
      const categoryAmount = item.amount;

      const existingCategory = julyCategoriesAmount.find(
        (obj) => obj.categoryName === categoryName,
      );

      if (existingCategory) {
        existingCategory.categoryAmount = +(
          existingCategory.categoryAmount + categoryAmount
        ).toFixed(2);
      } else {
        julyCategoriesAmount.push({ categoryName, categoryAmount });
      }
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-start justify-start gap-4">
      <div className="flex w-full gap-4">
        <LastBudget budget={+budget.amount} expenses={+juneExpensesAmount} />
        <CurrentBudget budget={+budget.amount} expenses={+julyExpensesAmount} />
        <ExpensesCategory categoriesAmount={julyCategoriesAmount} />
      </div>
      <div className="flex w-full gap-4">
        <TopCategory categoriesAmount={julyCategoriesAmount} />
        <HighestExpenses expenses={julyExpenses as ExpenseType[]} />
      </div>
    </main>
  );
}
