
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Zap, CalendarDays } from "lucide-react"; // Added CalendarDays for new page
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Beranda", href: "/" },
  { title: "Rutinitas", href: "/rutinitas" },
  { title: "Rencana Harian", href: "/rencana-harian" }, // New Nav Link
  { title: "Kebiasaan", href: "/kebiasaan" },
  { title: "Olahraga", href: "/olahraga" },
  { title: "Nutrisi", href: "/nutrisi" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="content-container flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
          <Zap className="h-8 w-8 mr-2 text-secondary" />
          <span className="text-2xl font-bold">Ritme Harian</span> {/* Changed App Name */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card shadow-lg absolute w-full border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
