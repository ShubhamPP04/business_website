import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400">INFINIE</h3>
            <p className="text-gray-400">
              Empowering professionals and entrepreneurs to achieve extraordinary results 
              through personalized coaching and proven strategies.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-emerald-400">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Strategic Planning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Leadership Development</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Business Growth</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Innovation Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Free Resources</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 INFINIE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
