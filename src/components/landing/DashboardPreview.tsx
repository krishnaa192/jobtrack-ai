import {
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const jobs = [
  {
    company: "Google",
    role: "Frontend Engineer",
    status: "Interview",
    color: "bg-blue-500",
  },
  {
    company: "Microsoft",
    role: "React Developer",
    status: "Applied",
    color: "bg-yellow-500",
  },
  {
    company: "Amazon",
    role: "SDE I",
    status: "Offer",
    color: "bg-green-500",
  },
  {
    company: "Meta",
    role: "Frontend Engineer",
    status: "Rejected",
    color: "bg-red-500",
  },
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="bg-zinc-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Everything in one dashboard
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Track every application from wishlist to offer.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

          <div className="grid lg:grid-cols-[240px_1fr]">

            {/* Sidebar */}

            <aside className="hidden border-r border-zinc-800 bg-zinc-950 lg:block">

              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  HireFlow
                </h3>

              </div>

              <nav className="space-y-2 px-4 pb-6">

                {[
                  "Dashboard",
                  "Jobs",
                  "Analytics",
                  "Calendar",
                  "AI Assistant",
                  "Settings",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full rounded-xl px-4 py-3 text-left text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                  >
                    {item}
                  </button>
                ))}

              </nav>

            </aside>

            {/* Main */}

            <div className="p-8">

              {/* Cards */}

              <div className="grid gap-5 md:grid-cols-4">

                <StatCard
                  title="Applications"
                  value="48"
                  icon={<Briefcase size={22} />}
                />

                <StatCard
                  title="Interviews"
                  value="11"
                  icon={<CalendarDays size={22} />}
                />

                <StatCard
                  title="Offers"
                  value="3"
                  icon={<CheckCircle2 size={22} />}
                />

                <StatCard
                  title="Rejected"
                  value="6"
                  icon={<XCircle size={22} />}
                />

              </div>

              {/* Lower Section */}

              <div className="mt-8 grid gap-6 xl:grid-cols-[1.6fr_1fr]">

                {/* Recent Jobs */}

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

                  <div className="mb-5 flex items-center justify-between">

                    <h3 className="font-semibold text-white">
                      Recent Applications
                    </h3>

                    <ArrowUpRight className="text-zinc-500" />

                  </div>

                  <div className="space-y-4">

                    {jobs.map((job) => (

                      <div
                        key={job.company}
                        className="flex items-center justify-between rounded-xl border border-zinc-800 p-4"
                      >
                        <div>

                          <h4 className="font-medium text-white">
                            {job.role}
                          </h4>

                          <p className="text-sm text-zinc-500">
                            {job.company}
                          </p>

                        </div>

                        <span className="flex items-center gap-2 rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">

                          <span
                            className={`h-2 w-2 rounded-full ${job.color}`}
                          />

                          {job.status}

                        </span>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Activity */}

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

                  <h3 className="mb-5 font-semibold text-white">
                    Activity
                  </h3>

                  <div className="space-y-5">

                    {[
                      "Applied to Netflix",
                      "Interview scheduled",
                      "Offer received",
                      "Resume updated",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >

                        <Clock3
                          size={18}
                          className="mt-1 text-blue-500"
                        />

                        <div>

                          <p className="text-white">
                            {item}
                          </p>

                          <span className="text-sm text-zinc-500">
                            Today
                          </span>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

      <div className="flex items-center justify-between">

        <p className="text-zinc-500">
          {title}
        </p>

        <div className="text-blue-500">
          {icon}
        </div>

      </div>

      <h3 className="mt-4 text-4xl font-bold text-white">
        {value}
      </h3>

    </div>
  );
}