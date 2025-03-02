import React from 'react';
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MP</h3>
            <p className="text-gray-400">
              Your one-stop destination for the best online games. Play, compete, and have fun!
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Adventure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Puzzle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Racing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">RPG</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400">
              Contact us at <a href="mailto:info@mp.com" className="text-indigo-400 hover:text-indigo-300 transition">info@mp.com</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;