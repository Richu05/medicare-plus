interface NavbarProps {
  clinicName: string;
}

function Navbar({clinicName}: NavbarProps) {
  return (
    <nav className = "flex items-center justify-between px-8 py-5">
      <h1 className = "text-2xl font-bold" >
        {clinicName}
      </h1>

      <div className="flex gap-6">
        <a href="#">Home</a>
        <a href="#">Doctors</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex gap-3">
        <button>Login</button>
        <button>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;