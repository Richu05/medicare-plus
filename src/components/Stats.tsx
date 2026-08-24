interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "10K+",
    label: "Happy Patients",
    description: "People trust our platform",
  },
  {
    value: "500+",
    label: "Verified Doctors",
    description: "Experienced healthcare professionals",
  },
  {
    value: "50+",
    label: "Specialist Clinics",
    description: "Across multiple locations",
  },
  {
    value: "98%",
    label: "Patient Satisfaction",
    description: "Positive healthcare experience",
  },
];

function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            MediCare+ in numbers
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Healthcare you can trust
          </h2>

          <p className="mt-4 text-slate-600">
            We make it easier for patients to find trusted doctors
            and manage their healthcare.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-4xl font-bold text-blue-600">
                {stat.value}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {stat.label}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;