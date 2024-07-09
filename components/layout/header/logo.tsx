import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <h1 className="sr-only">Celeste</h1>
      <Link href="/">
        <span className="text-2xl font-black tracking-tighter">Celeste</span>
      </Link>
    </div>
  );
}
