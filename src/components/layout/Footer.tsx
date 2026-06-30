import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="border-t border-zinc-800 bg-zinc-950"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} HireFlow. All rights reserved.
        </p>

        <div className="flex gap-6">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="https://github.com">GitHub</Link>
        </div>

      </div>
    </footer>
  );
}