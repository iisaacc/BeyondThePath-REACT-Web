import { useState } from "react";
import { useCart } from "../Cart/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full bg-[#E8C155] backdrop-blur-md shadow z-50">
      <nav className="container mx-auto flex justify-between items-center py-0 px-1">
        <img
          src={`${process.env.PUBLIC_URL}/stock/logo-navbar.png`}
          alt="Beyond the Path logo"
          className="h-20 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-sans font-semibold tracking-wide">
          <li>
            <a href="#experience" className="hover:text-indigo-600 transition">
              The Experience
            </a>
          </li>
          <li>
            <a href="#map" className="hover:text-indigo-600 transition">
              Essential Map
            </a>
          </li>
          <li>
            <a href="#book" className="hover:text-indigo-600 transition">
              Book Dates
            </a>
          </li>
          <li>
            <a href="#vehicles" className="hover:text-indigo-600 transition">
              Vehicles
            </a>
          </li>
          <li>
            <button className="relative">
              <ShoppingBag className="w-7 h-7 text-gray-800 hover:text-indigo-600 transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Carrito también en mobile */}
          <button className="relative">
            <ShoppingBag className="w-7 h-7 text-gray-800 hover:text-indigo-600 transition" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-600 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg absolute w-full left-0 top-full z-40">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                The Experience
              </a>
            </li>
            <li>
              <a href="#map" onClick={() => setMenuOpen(false)}>
                Essential Map
              </a>
            </li>
            <li>
              <a href="#book" onClick={() => setMenuOpen(false)}>
                Book Dates
              </a>
            </li>
            <li>
              <a href="#vehicles" onClick={() => setMenuOpen(false)}>
                Vehicles
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
