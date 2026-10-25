import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart3,
  Boxes,
  Code2,
  ShieldCheck,
  ClipboardCheck,
  Rocket,
  Headphones,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const teammates = [
  {
    id: '01',
    role: 'Product Analyst',
    desc: 'Turns ideas into requirements, user stories and product specs.',
    icon: BarChart3,
    badgeBg: 'from-blue-500 to-indigo-600',
    badgeTextBg: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300',
    arrowBg: 'bg-blue-100/80 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white',
    delay: 0,
  },
  {
    id: '02',
    role: 'Solution Architect',
    desc: 'Designs scalable distributed architecture and technical stacks.',
    icon: Boxes,
    badgeBg: 'from-purple-500 to-violet-600',
    badgeTextBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300',
    arrowBg: 'bg-purple-100/80 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white',
    delay: 0.06,
  },
  {
    id: '03',
    role: 'Software Engineer',
    desc: 'Builds full-stack production application code and APIs.',
    icon: Code2,
    badgeBg: 'from-emerald-400 to-teal-500',
    badgeTextBg: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300',
    arrowBg: 'bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 group-hover:bg-emerald-600 group-hover:text-white',
    delay: 0.12,
  },
  {
    id: '04',
    role: 'Security Engineer',
    desc: 'Conducts OWASP vulnerability checks and cryptographic audits.',
    icon: ShieldCheck,
    badgeBg: 'from-amber-500 to-orange-600',
    badgeTextBg: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300',
    arrowBg: 'bg-orange-100/80 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 group-hover:bg-orange-600 group-hover:text-white',
    delay: 0.18,
  },
  {
    id: '05',
    role: 'QA Engineer',
    desc: 'Creates unit, integration and end-to-end regression test suites.',
    icon: ClipboardCheck,
    badgeBg: 'from-indigo-500 to-purple-600',
    badgeTextBg: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300',
    arrowBg: 'bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white',
    delay: 0.24,
  },
  {
    id: '06',
    role: 'DevOps Engineer',
    desc: 'Provisions cloud infrastructure, Docker, K8s and CI/CD pipelines.',
    icon: Rocket,
    badgeBg: 'from-pink-500 to-rose-600',
    badgeTextBg: 'bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300',
    arrowBg: 'bg-pink-100/80 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 group-hover:bg-pink-600 group-hover:text-white',
    delay: 0.3,
  },
  {
    id: '07',
    role: 'Support Engineer',
    desc: 'Monitors uptime, auto-heals runtime errors and resolves bugs.',
    icon: Headphones,
    badgeBg: 'from-sky-400 to-blue-600',
    badgeTextBg: 'bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300',
    arrowBg: 'bg-sky-100/80 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300 group-hover:bg-sky-600 group-hover:text-white',
    delay: 0.36,
  },
];

export default function AITeam() {
  return (
    <section id="solutions" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 bg-violet-50 dark:bg-violet-950/40">
            ✦ AI Engineering Team
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-white">
            Your AI engineering team, <span className="gradient-text">available 24/7.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Nexova orchestrates specialized AI teammates that collaborate seamlessly across every phase of software development.
          </p>
        </motion.div>

        {/* 8-Card Team Grid (1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
          
          {/* Teammates 1 - 7 */}
          {teammates.map((tm) => {
            const Icon = tm.icon;
            return (
              <motion.div
                key={tm.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Soft background glow tint in top right corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr ${tm.badgeBg} opacity-10 blur-xl pointer-events-none group-hover:opacity-20 transition-opacity`} />

                <div>
                  {/* Top Row: Icon Badge & Number Badge */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${tm.badgeBg} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>
                    <span className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full font-mono text-xs font-bold ${tm.badgeTextBg}`}>
                      {tm.id}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {tm.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-5 sm:mb-6">
                    {tm.desc}
                  </p>
                </div>

                {/* Footer Row: Active Status Badge & Action Arrow */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold text-[10px] sm:text-[11px] border border-emerald-200/60 dark:border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ACTIVE</span>
                  </div>

                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${tm.arrowBg} flex items-center justify-center transition-all duration-300 shadow-sm`}>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 8th Slot: Floating Atmosphere Graphic Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative hidden lg:flex flex-col justify-end items-end p-6 rounded-3xl overflow-hidden pointer-events-none"
          >
            {/* Curved Glow Wave */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-purple-100/30 to-blue-100/50 dark:from-indigo-950/20 dark:to-purple-950/20 rounded-3xl border border-indigo-200/40 dark:border-indigo-800/30" />

            {/* Sparkle Badge Floating */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-lg mb-4 transform rotate-12">
              <Sparkles className="w-6 h-6 fill-indigo-100 dark:fill-indigo-900" />
            </div>

            {/* Glowing swoosh line */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}