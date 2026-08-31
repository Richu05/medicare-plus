const footerLinks = {
  Platform: [
    "Find Doctors",
    "Appointments",
    "Services",
    "Health Records",
  ],
  Company: [
    "About Us",
    "Contact",
    "Careers",
  ],
  Support: [
    "Help Center",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="max-w-sm">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                +
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  MediCare+
                </h2>

                <p className="text-xs text-slate-400">
                  Healthcare made simple
                </p>
              </div>

            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Making healthcare simpler by connecting patients
              with trusted doctors and convenient medical services.
            </p>

          </div>


          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links]) => (
              <div key={category}>

                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {category}
                </h3>

                <ul className="mt-5 space-y-3">

                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}

                </ul>

              </div>
            )
          )}

        </div>


        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />


        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 MediCare+. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Cookies
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;