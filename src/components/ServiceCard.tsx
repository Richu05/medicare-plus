interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      
      {/* Icon */}
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-600">
        <span className="transition group-hover:grayscale group-hover:brightness-0 group-hover:invert">
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      {/* Link */}
      <button className="mt-6 font-semibold text-blue-600 transition group-hover:text-blue-700">
        Learn more →
      </button>
    </div>
  );
}

export default ServiceCard;