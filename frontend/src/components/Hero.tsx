import doctorHero from "../assets/doctor-hero.png";

function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* ================= LEFT SIDE ================= */}
        <div className="z-10">

          {/* Small Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Trusted Healthcare Platform
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Your Health,
            <span className="block text-blue-600">
              Our Priority.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Connect with trusted doctors, book appointments,
            and manage your healthcare journey — all in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl">
              Find a Doctor

              <span className="text-xl">
                →
              </span>
            </button>

            <button className="flex items-center gap-3 rounded-xl border border-blue-200 bg-white px-7 py-4 font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50">
              Book Appointment

              <span className="text-lg">
                ▣
              </span>
            </button>

          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-7">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600">
                ✓
              </div>

              <span className="text-sm font-medium text-slate-700">
                Verified Doctors
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600">
                ▣
              </div>

              <span className="text-sm font-medium text-slate-700">
                Easy Booking
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600">
                🔒
              </div>

              <span className="text-sm font-medium text-slate-700">
                Secure & Private
              </span>
            </div>

          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

          {/* Decorative Circle */}
          <div className="absolute -left-8 top-10 h-24 w-24 rounded-full border border-blue-200 opacity-70" />

          {/* Main Image */}
          <div className="relative overflow-visible rounded-[3rem] border-8 border-white bg-blue-100 shadow-2xl shadow-blue-200">

            <img
              src={doctorHero}
              alt="Doctor providing healthcare services"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover object-center"
            />

          </div>


          {/* ================= FLOATING CARD 1 ================= */}
          <div className="absolute -left-6 top-24 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:flex">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
              👥
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900">
                10K+
              </p>

              <p className="text-sm text-slate-500">
                Happy Patients
              </p>
            </div>

          </div>


          {/* ================= FLOATING CARD 2 ================= */}
          <div className="absolute -right-5 top-52 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:flex">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
              ★
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900">
                4.9/5
              </p>

              <p className="text-sm text-slate-500">
                Patient Rating
              </p>
            </div>

          </div>


          {/* ================= FLOATING CARD 3 ================= */}
          <div className="absolute -right-4 bottom-24 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl sm:flex">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
              ✓
            </div>

            <div>
              <p className="text-xl font-bold text-slate-900">
                100%
              </p>

              <p className="text-sm text-slate-500">
                Safe & Secure
              </p>
            </div>

          </div>

          {/* Decorative Dots */}
          <div className="absolute -right-10 top-16 hidden grid-cols-4 gap-2 lg:grid">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-blue-300"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;