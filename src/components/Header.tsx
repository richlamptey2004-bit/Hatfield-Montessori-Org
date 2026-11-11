import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur-md py-2 border-slate-200" : "bg-white py-4 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img 
            src="/assets/aistudio/Hatfield_crest_264017d7.jpeg" 
            alt="Hatfield Montessori Logo" 
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight text-navy">HATFIELD</h1>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em] -mt-1">Montessori School</p>
          </div>
        </Link>

        {/* Zone 2: Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "hover:text-navy transition-colors whitespace-nowrap shrink-0 relative py-1",
                location.pathname === link.path && "text-navy after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-navy"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link 
            to="/contact?tour=true" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-navy rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>BOOK A TOUR</span>
          </Link>
          <a 
            href="https://wa.me/233244367117" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-navy bg-gold rounded-full hover:bg-amber-500 transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">WHATSAPP</span>
          </a>
          
          <button 
            className="lg:hidden p-2 text-navy"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-semibold py-2 transition-colors",
                  location.pathname === link.path ? "text-navy" : "text-slate-500"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-slate-100 my-2" />
            <Link 
              to="/contact?tour=true" 
              className="flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-navy rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>BOOK A TOUR</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
