import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08070c]/80 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-6 py-5 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-[-1.5px] text-white"
          >
            dev<span className="text-purple-400">blossom</span>
            <span className="ml-1 align-top text-xs text-purple-300">✦</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
            <Link
              to="/work"
              className="transition hover:text-purple-300"
            >
              Things I've made
            </Link>

            <Link
              to="/exploring"
              className="transition hover:text-purple-300"
            >
              What I'm figuring out
            </Link>

            <Link
              to="/about"
              className="transition hover:text-purple-300"
            >
              About me
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-purple-300"
            >
              Let's talk
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-purple-400/30 px-4 py-2 text-purple-300 transition hover:border-purple-300 hover:bg-purple-400/10 hover:text-purple-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition hover:border-purple-300/30 hover:text-purple-300 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="border-t border-white/10 pb-2 pt-6 lg:hidden">
            <div className="flex flex-col gap-1">
              <Link
                to="/work"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.03] hover:text-purple-300"
              >
                Things I've made
              </Link>

              <Link
                to="/exploring"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.03] hover:text-purple-300"
              >
                What I'm figuring out
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.03] hover:text-purple-300"
              >
                About me
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.03] hover:text-purple-300"
              >
                Let's talk
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-purple-400/30 px-4 py-3 text-sm font-semibold text-purple-300 transition hover:border-purple-300 hover:bg-purple-400/10 hover:text-purple-200"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;