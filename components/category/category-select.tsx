"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CategoryBadge from "../utils/category-badge";

const categories = [
  {
    id: 1,
    name: "Housing",
  },
  {
    id: 2,
    name: "Transportation",
  },
  {
    id: 3,
    name: "Food",
  },
  {
    id: 4,
    name: "Healthcare",
  },
  {
    id: 5,
    name: "Personal Care and Clothing",
  },
  {
    id: 6,
    name: "Entertainment and Recreation",
  },
  {
    id: 7,
    name: "Childcare and Education",
  },
  {
    id: 8,
    name: "Insurance",
  },
  {
    id: 9,
    name: "Savings and Debt Payments",
  },
  {
    id: 11,
    name: "Miscellaneous",
  },
];

export default function CategorySelect({
  selectedCategory,
  onCategoryChange,
  fullWidth = false,
}: {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  fullWidth?: boolean;
}) {
  return (
    <Select
      value={selectedCategory}
      onValueChange={(event) => {
        onCategoryChange(event);
      }}
    >
      <SelectTrigger className={`bg-card ${fullWidth ? "w-full" : "w-64"}`}>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem
              key={category.id}
              className="py-2"
              value={category.name}
            >
              <CategoryBadge id={category.id} label={category.name} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
