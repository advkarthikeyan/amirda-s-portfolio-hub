import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="font-display text-2xl font-semibold">
          <span style={{ color: "hsl(270 70% 60%)" }}>A</span>mirda Varshini M N
        </a>

        <ul className="flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle menu"
          className="hidden p-2 rounded-md border border-border"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 h-0.5 bg-foreground mb-1.5" />
          <div className="w-5 h-0.5 bg-foreground mb-1.5" />
          <div className="w-5 h-0.5 bg-foreground" />
        </button>
      </nav>

      {open && (
        <div className="mt-4 mx-4 rounded-2xl glass-card p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-medium text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};