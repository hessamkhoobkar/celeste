export default function CategoryBadge({
  id = 11,
  label = "Miscellaneous",
}: {
  id: number | null;
  label: string | null;
}) {
  let colors;

  switch (id) {
    case 1:
      colors =
        "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-500";
      break;
    case 2:
      colors = "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-500";
      break;
    case 3:
      colors =
        "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-500";
      break;
    case 4:
      colors = "bg-lime-100 text-lime-600 dark:bg-lime-950 dark:text-lime-500";
      break;
    case 5:
      colors = "bg-teal-100 text-teal-600 dark:bg-teal-950 dark:text-teal-500";
      break;
    case 6:
      colors = "bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-500";
      break;
    case 7:
      colors = "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-500";
      break;
    case 8:
      colors =
        "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-500";
      break;
    case 9:
      colors =
        "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-500";
      break;
    case 11:
      colors = "bg-cloud-200 text-cloud-900 dark:bg-ink-200 dark:text-ink-900";
      break;
  }

  return (
    <div
      className={`flex max-w-max items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${colors}`}
    >
      {label}
    </div>
  );
}
