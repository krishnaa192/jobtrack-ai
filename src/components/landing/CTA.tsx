import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-blue-600/20 via-zinc-900 to-violet-600/20 p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Ready to land your next opportunity?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Organize applications, prepare for interviews, and stay focused with one dashboard.
          </p>

          <div className="mt-10 flex justify-center">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight size={18} />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}