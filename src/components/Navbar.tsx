import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update isScrolled state
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update activeSection state
      const sections = ['hero', 'services', 'about', 'features', 'pricing', 'testimonials', 'contact', 'footer'];
      let currentActive = 'hero';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial states
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A4E39] py-2 shadow-xl backdrop-blur-lg bg-opacity-50' : 'bg-transparent pt-3 pb-3'}`}>
      <div className="container mx-auto px-2 py-2 flex justify-between items-center md:px-3 md:py-1.5">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/489969.png" alt="INFINIE Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold tracking-wide text-white">INFINIE.</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-5 items-center">
          <li>
            <a
              href="#hero"
              onClick={(e) => handleNavLinkClick(e, 'hero')}
              className={`relative ${activeSection === 'hero' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Home
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'hero' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleNavLinkClick(e, 'services')}
              className={`relative ${activeSection === 'services' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Services
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'services' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavLinkClick(e, 'about')}
              className={`relative ${activeSection === 'about' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              About Us
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'about' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              onClick={(e) => handleNavLinkClick(e, 'features')}
              className={`relative ${activeSection === 'features' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Features
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'features' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              onClick={(e) => handleNavLinkClick(e, 'pricing')}
              className={`relative ${activeSection === 'pricing' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Pricing
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'pricing' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleNavLinkClick(e, 'testimonials')}
              className={`relative ${activeSection === 'testimonials' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Testimonials
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'testimonials' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavLinkClick(e, 'contact')}
              className={`relative ${activeSection === 'contact' ? 'text-green-400' : 'text-white'} hover:text-green-300 hover:bg-white/10 hover:scale-105 transition-all duration-300 group px-2 py-1 text-sm md:text-base rounded-md`}
            >
              Contact us
              <span className={`absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-green-400 to-teal-400 transition-transform duration-300 origin-left ${activeSection === 'contact' ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 rounded-full`}></span>
            </a>
          </li>
        </ul>

        {/* Phone Number and Button */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:+01789859664" className="flex items-center text-gray-200 hover:text-white transition-colors duration-200">
            <Phone className="h-5 w-5 mr-2 text-green-400" />
            <span className="font-medium">+01789 859 664</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center transform hover:-translate-y-1"
          >
            Get In Touch <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {isMobileMenuOpen ? <X className="h-7 w-7 transition-transform duration-300" /> : <Menu className="h-7 w-7 transition-transform duration-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0A4E39] bg-opacity-95 absolute top-0 left-0 right-0 py-2 shadow-lg transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-lg bg-opacity-50" style={{ paddingTop: '3rem', maxHeight: isMobileMenuOpen ? '500px' : '0', opacity: isMobileMenuOpen ? '1' : '0' }}>
          {/* Close Button */}
          <div className="absolute top-2 right-2">
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-white focus:outline-none">
              <X className="h-7 w-7" />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-3">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'about', label: 'About Us' },
              { id: 'features', label: 'Features' },
              { id: 'pricing', label: 'Pricing' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'contact', label: 'Contact us' },
            ].map((link, index) => (
              <li
                key={link.id}
                className={`transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 0.05}s` : '0s' }}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  className={`text-lg ${activeSection === link.id ? 'text-green-400' : 'text-white'} hover:text-green-300 transition-colors duration-200 px-2 py-1`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center w-full">
              <a href="tel:+01789859664" className="flex items-center text-gray-200 hover:text-white transition-colors duration-200 px-2 py-1">
                <Phone className="h-5 w-5 mr-2 text-green-400" />
                <span className="font-medium">+01789 859 664</span>
              </a>
            </li>
            <li>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center transform hover:-translate-y-1">
                Get In Touch <ArrowUpRight className="ml-2 h-4 w-4" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;