const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
];

export default function TrustedBy() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Inspired by hiring workflows at
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-16 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-blue-500 hover:bg-zinc-800"
            >
              <span className="text-sm font-semibold tracking-wide text-zinc-300">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}