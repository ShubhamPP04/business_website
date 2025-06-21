import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact us' },
];

const MobileNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-[#0A4E39] md:hidden shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src="/489969.png" alt="INFINIE Logo" className="h-8 w-8 mr-2" />
          <span className="text-lg font-bold tracking-wide text-white">INFINIE.</span>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {/* Slide-down menu */}
      <div
        className={`transition-all duration-300 bg-[#0A4E39] overflow-hidden ${open ? 'max-h-96 py-2' : 'max-h-0 py-0'} shadow-lg`}
        style={{ zIndex: 9999 }}
      >
        <ul className="flex flex-col items-center space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block text-white text-base px-4 py-2 rounded hover:bg-green-700 w-full text-center transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavbar; 