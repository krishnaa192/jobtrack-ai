import {
  Heart,
  Send,
  FileSearch,
  Laptop,
  Users,
  Trophy,
} from "lucide-react";

const steps = [
  {
    icon: Heart,
    title: "Wishlist",
    description: "Save companies and dream roles.",
  },
  {
    icon: Send,
    title: "Applied",
    description: "Track every application in one place.",
  },
  {
    icon: FileSearch,
    title: "Online Assessment",
    description: "Practice and complete coding tests.",
  },
  {
    icon: Laptop,
    title: "Technical Interview",
    description: "Prepare with AI-generated questions.",
  },
  {
    icon: Users,
    title: "HR Round",
    description: "Manage interview schedules and notes.",
  },
  {
    icon: Trophy,
    title: "Offer",
    description: "Celebrate your new opportunity 🎉",
  },
];

export default function Timeline() {
  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Your journey from application to offer
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            HireFlow helps you organize every step of your job search.
          </p>
        </div>

        <div className="relative">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-8 hidden h-1 bg-zinc-800 lg:block" />

          <div className="grid gap-8 lg:grid-cols-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                    <Icon size={30} />
                  </div>

                  <div className="mt-6">
                    <span className="text-sm text-zinc-500">
                      Step {index + 1}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}