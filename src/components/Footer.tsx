import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/aistudio/Hatfield_crest_264017d7.jpeg" 
                alt="Hatfield Montessori Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
              <h2 className="text-xl font-bold tracking-tight">HATFIELD</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cultivating active minds and happy hearts through a unique blend of Montessori principles, technology, and character development in Accra, Ghana.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our History</Link></li>
              <li><Link to="/academics" className="hover:text-gold transition-colors">Academic Levels</Link></li>
              <li><Link to="/admissions" className="hover:text-gold transition-colors">Admissions Process</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Facilities Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Programs</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/academics#early-years" className="hover:text-gold transition-colors">Early Years / Nursery</Link></li>
              <li><Link to="/academics#primary" className="hover:text-gold transition-colors">Primary Education</Link></li>
              <li><Link to="/academics#secondary" className="hover:text-gold transition-colors">Secondary Education</Link></li>
              <li><Link to="/academics#extracurricular" className="hover:text-gold transition-colors">Extracurricular Activities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Visit Us</h3>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>Accra, Ghana (Near Kotoka International Airport)</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+233 24 436 7117</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@hatfieldmontessori.edu.gh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Hatfield Montessori School. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/admin" className="hover:text-slate-400">Staff Portal</Link>
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
