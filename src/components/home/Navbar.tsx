import GoldButton from "./GoldButton";

export default function Navbar() {
  return (
    <header className="sticky bg-bg top-0 z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between font-[nav]">
        {/* Logo */}
        <h1 className="text-2xl font-semibold tracking-wide cursor-pointer text-gray-300">
          Crypto<span className="text-brand-light">Pay</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Features
          </a>
          <a href="#" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#" className="hover:text-white transition">
            Docs
          </a>
          <a href="/login" className="hover:text-white transition">
            Login
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <GoldButton>Get Started</GoldButton>
        </div>
      </nav>
    </header>
  );
}
