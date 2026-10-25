import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, ArrowRight } from 'lucide-react';

const checks = [
  { label: 'Authentication & Session Security', status: 'Passed', color: '#10b981' },
  { label: 'Role-Based Access Control (RBAC)', status: 'Passed', color: '#10b981' },
  { label: 'Input Validation & Sanitization', status: 'Passed', color: '#10b981' },
  { label: 'API Gateway & Rate Limiting', status: 'Passed', color: '#10b981' },
  { label: 'Dependency Vulnerability Audit', status: 'Advisory', color: '#d97706' },
  { label: 'Secret & API Key Leak Detection', status: 'Passed', color: '#10b981' },
  { label: 'Data Encryption at Rest & Transit', status: 'Passed', color: '#10b981' },
  { label: 'Cloud Infrastructure Hardening', status: 'Passed', color: '#10b981' },
];

export default function SecuritySection() {
  const [visible, setVisible] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const score = 94;

  return (
    <section id="security" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 text-amber-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 bg-amber-50 dark:bg-transparent">
              ✦ Security & Compliance
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              <span className="text-slate-900 dark:text-white">Security built into</span>
              <br />
              <span className="gradient-text">the development lifecycle.</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
              Don&apos;t wait until production to discover vulnerabilities. 
              Nexova performs security analysis throughout the entire autonomous engineering workflow — 
              from architecture validation to dependency verification.
            </p>

            <div className="space-y-2.5 sm:space-y-3 mb-8">
              {[
                'Automated OWASP Top 10 vulnerability scanning',
                'Zero exposed credentials or hardcoded keys',
                'Cryptographic authentication & token verification',
                'Actionable remediation recommendations',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 dark:text-slate-300 font-semibold"
                >
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <Shield size={11} className="text-amber-700 dark:text-amber-400" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#demo"
              className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base px-6 py-3.5 rounded-xl font-bold w-full sm:w-auto shadow-lg"
            >
              Explore Security Architecture
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: Security command center */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="glass rounded-3xl border border-slate-200 dark:border-white/10 p-5 sm:p-7 relative overflow-hidden shadow-xl bg-white dark:bg-slate-900/80">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5 relative">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Security Command Center
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Continuous automated policy audit
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-extrabold text-amber-600 dark:text-amber-400">
                    {score}<span className="text-lg">/100</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Security Score
                  </div>
                </div>
              </div>

              {/* Score bar */}
              <div className="mb-6 relative">
                <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #10b981, #f59e0b)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Checks */}
              <div className="space-y-1.5 sm:space-y-2">
                {checks.map((check, i) => (
                  <motion.div
                    key={check.label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={visible.includes(i) ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl transition-all"
                    style={{
                      background: visible.includes(i) ? `${check.color}12` : 'transparent',
                      borderLeft: visible.includes(i) ? `3px solid ${check.color}` : '3px solid transparent',
                    }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={{ background: check.color, color: 'white' }}
                      >
                        {check.status === 'Passed' ? '✓' : '!'}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-900 dark:text-slate-200 font-bold truncate">
                        {check.label}
                      </span>
                    </div>
                    <span
                      className="text-[11px] sm:text-xs font-extrabold px-2 sm:px-2.5 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        background: `${check.color}25`,
                        color: check.color,
                      }}
                    >
                      {check.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}