import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/works' },
  { name: 'Tools', href: '/tools' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full h-16 border-b border-white/5 bg-black/40 backdrop-blur-xl flex items-center justify-center px-10`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-center items-center relative">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-16">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[10px] tracking-[0.4em] uppercase text-zinc-400 hover:text-white transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex w-full justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl flex flex-col space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white text-center py-2 border-b border-zinc-800/50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
