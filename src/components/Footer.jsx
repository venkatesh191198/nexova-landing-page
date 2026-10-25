export default function Footer() {
  const footerLinks = {
    Platform: ['AI App Builder', 'Architecture Engine', 'Code Generation', 'Security Analysis', 'Automated QA', 'Cloud Deploy'],
    Solutions: ['Early Startups', 'Growth Scaleups', 'Enterprise IT', 'Product Teams', 'Solo Developers'],
    Industries: ['Manufacturing', 'Technology & SaaS', 'Healthcare & Life', 'Finance & Banking', 'Retail & Commerce', 'Logistics'],
    Resources: ['Documentation', 'Architecture Guide', 'API Reference', 'Security Whitepaper', 'Community'],
    Company: ['About Nexova', 'Careers', 'Security & Trust', 'Privacy Policy', 'Terms of Service', 'Contact Us'],
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-slate-50/70 dark:bg-[#05060b]">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 mb-2 sm:mb-0">
            <div className="flex items-center mb-3">
              <img 
                src="/img/logo-light.png" 
                alt="Nexova" 
                className="block dark:hidden h-7 sm:h-8 w-auto object-contain"
              />
              <img 
                src="/img/logo-dark.png" 
                alt="Nexova" 
                className="hidden dark:block h-7 sm:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-[220px]">
              The autonomous AI-powered application engineering platform.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 mt-4 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:opacity-90 shadow-md text-white"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              Build with Nexova →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[11px] sm:text-xs font-extrabold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#demo"
                      className="text-xs text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white transition-colors font-medium block py-0.5"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Nexova Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            <span>All Engineering Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}