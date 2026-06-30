import {
  Briefcase,
  BrainCircuit,
  CalendarDays,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Job Tracking",
    description:
      "Manage every application with status, notes, salary and deadlines.",
  },
  {
    icon: BrainCircuit,
    title: "AI Assistant",
    description:
      "Generate interview questions, resume suggestions and job summaries.",
  },
  {
    icon: CalendarDays,
    title: "Interview Calendar",
    description:
      "Never miss interviews with reminders and timeline tracking.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Measure response rate, interview success and offer conversion.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-zinc-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Everything you need to land your next job
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            HireFlow keeps your applications organized while AI helps you
            prepare smarter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}