import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#03071e]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:py-32">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
          🚀 Trusted by developers preparing for interviews
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
          Track Every
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Job Application
          </span>
          <br />
          Until It Becomes
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            {" "}
            An Offer.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Organize applications, prepare for interviews, analyze your progress,
          and let AI help you land your next software engineering role.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg" className="gap-2">
            <PlayCircle className="h-4 w-4" />
            Watch Demo
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 w-full max-w-6xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur">
          {/* Browser Header */}
          <div className="mb-6 flex items-center gap-2 border-b border-zinc-800 pb-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ["Applications", "48"],
              ["Interviews", "11"],
              ["Offers", "3"],
              ["Response Rate", "23%"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left"
              >
                <p className="text-sm text-zinc-500">{title}</p>

                <h3 className="mt-3 text-4xl font-bold text-white">
                  {value}
                </h3>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="mt-6 flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 text-zinc-500">
            📈 Analytics Dashboard Preview
          </div>
        </div>
      </div>
    </section>
  );
}