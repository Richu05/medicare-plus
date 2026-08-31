import ServiceCard from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "🩺",
    title: "Find Doctors",
    description:
      "Discover trusted and experienced doctors across different medical specialties.",
  },
  {
    icon: "📅",
    title: "Book Appointments",
    description:
      "Schedule appointments with your preferred doctor quickly and conveniently.",
  },
  {
    icon: "💊",
    title: "Health Records",
    description:
      "Keep your important healthcare information organized and accessible.",
  },
  {
    icon: "🔬",
    title: "Specialist Care",
    description:
      "Find the right specialist for your specific healthcare needs.",
  },
  {
    icon: "💬",
    title: "Online Consultation",
    description:
      "Connect with healthcare professionals from the comfort of your home.",
  },
  {
    icon: "🛡️",
    title: "Secure Healthcare",
    description:
      "Your personal healthcare information is protected with security in mind.",
  },
];

function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need for better healthcare
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            From finding the right doctor to managing your
            appointments, MediCare+ makes healthcare simpler.
          </p>

        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;