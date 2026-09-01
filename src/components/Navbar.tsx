import { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  clinicName: string;
}

function Navbar({ clinicName }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Find Doctors",
    "Services",
    "About",
  ];

  return (
    <nav className="border-b border-blue-100 bg-linear-to-r from-sky-50 via-white to-teal-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-sm">
            +
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              {clinicName}
            </h1>

            <p className="text-xs text-slate-500">
              Healthcare made simple
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`relative text-sm font-medium transition-colors ${
                link === "Home"
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link}

              {link === "Home" && (
                <span className="absolute -bottom-6 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-blue-600" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Login
          </button>

          <Link
            to="/register-doctor"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            Register Doctor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link}
              </a>
            ))}

            <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Login
            </button>

            <Link
              to="/register-doctor"
              className="mt-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 block text-center"
            >
              Register Doctor
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;