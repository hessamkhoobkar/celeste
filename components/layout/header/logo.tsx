import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <h1 className="sr-only">Celeste</h1>
      <Link href="/">
        <span className="text-3xl font-black tracking-tighter">Stride</span>
      </Link>
    </div>
  );
}
