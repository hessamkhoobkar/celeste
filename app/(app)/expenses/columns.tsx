"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CategoryBadge from "@/components/utils/category-badge";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Router } from "next/router";

// This type is used to define the shape of our data.
export type Expense = {
  id: string;
  amount: number;
  categories: {
    id: number;
    name: string;
  };
  expense_date: Date | string;
};

export const columns: ColumnDef<Expense>[] = [
  {
    accessorKey: "rowId",
    header: () => <div className="ps-4">#</div>,
    cell: ({ row }) => {
      const id = (row.index + 1) as number;

      return <span className="ps-4">{id}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ cell }) => {
      const amount = cell.getValue() as number;

      return <span>${amount.toLocaleString()}</span>;
    },
  },
  {
    accessorKey: "categories",
    header: "Category",
    cell: ({ cell }) => {
      const category = cell.getValue() as { id: number; name: string };

      return <CategoryBadge id={category?.id} label={category?.name} />;
    },
    filterFn: (row, columnId, filterValue) => {
      const category = row.getValue(columnId) as {
        id: number;
        name: string;
      } | null;

      return category !== null && category.name === filterValue;
    },
  },
  {
    accessorKey: "expense_date",
    header: "Date",
    cell: ({ cell }) => {
      const date = new Date(cell.getValue() as string);

      return (
        <span>
          {date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ cell }) => {
      const description = cell.getValue() as string;

      return (
        <span>
          {description && description.length > 36
            ? description.slice(0, 36) + "..."
            : description}
        </span>
      );
    },
  },
  {
    id: "View",
    cell: ({ row }) => {
      const expense = row.original;

      return (
        <Link className="flex w-full" href={`/expenses/${expense.id}`}>
          <Button variant="outline">View</Button>
        </Link>
      );
    },
  },
];
