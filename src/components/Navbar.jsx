import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Live Demo', href: '#demo' },
  { label: 'AI Team', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Security', href: '#security' },
  { label: 'Integrations', href: '#integrations' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 sm:py-3 bg-white/90 dark:bg-[#07080f]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-2xl'
            : 'py-3 sm:py-4 bg-white/80 dark:bg-[#07080f]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border-b border-slate-200/50 sm:border-b-0 dark:border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group py-1 flex-shrink-0">
            <img
              src="/img/logo-light.png"
              alt="Nexova"
              className="block dark:hidden h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <img
              src="/img/logo-dark.png"
              alt="Nexova"
              className="hidden dark:block h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 rounded-lg transition-all duration-200 font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#demo"
              className="px-4 py-2 text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors duration-200 font-semibold"
            >
              Sign In
            </a>
            <a
              href="#demo"
              className="btn-primary text-sm px-5 py-2.5 rounded-xl font-bold flex items-center gap-1.5"
            >
              Get Started <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <div className="scale-90 sm:scale-100 origin-right">
              <ThemeToggle />
            </div>
            <button
              className="p-2 sm:p-2.5 rounded-xl text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer & Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-down Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[58px] sm:top-[68px] left-0 right-0 z-40 lg:hidden bg-white/95 dark:bg-[#07080f]/95 backdrop-blur-2xl border-b border-slate-200/90 dark:border-white/10 shadow-2xl max-h-[calc(100dvh-60px)] overflow-y-auto"
            >
              <div className="max-w-md mx-auto px-5 py-5 flex flex-col gap-1">
                {/* Nav Links */}
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5 rounded-xl transition-all font-semibold text-sm active:scale-[0.98]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={14} className="text-slate-400" />
                  </a>
                ))}

                {/* Mobile CTAs */}
                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-200 dark:border-white/10 mt-2">
                  <a
                    href="#demo"
                    onClick={() => setMobileOpen(false)}
                    className="btn-primary text-center py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-lg"
                  >
                    <Sparkles size={16} />
                    Start Building Free →
                  </a>
                  <a
                    href="#demo"
                    onClick={() => setMobileOpen(false)}
                    className="btn-secondary text-center py-3 rounded-xl font-semibold text-sm"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}