import { motion } from 'framer-motion';
import {
  Code,
  Lightbulb,
  FileText,
  Network,
  FlaskConical,
  ShieldCheck,
  Cloud,
  Settings,
  Clock,
  Sparkles,
  Brain,
  Rocket,
  Gauge,
} from 'lucide-react';

const traditionalSteps = [
  {
    num: '01',
    title: 'Idea Definition',
    desc: 'Define problem scope, business targets and requirements.',
    icon: Lightbulb,
    bgColor: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    num: '02',
    title: 'Requirements Spec',
    desc: 'Write extensive BRD, user stories and acceptance criteria.',
    icon: FileText,
    bgColor: 'bg-purple-100 dark:bg-purple-900/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    num: '03',
    title: 'Architecture & Schemas',
    desc: 'Design system boundaries, tech stack and database schema.',
    icon: Network,
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    num: '04',
    title: 'Manual Development',
    desc: 'Write frontend, backend, APIs and internal pipelines.',
    icon: Code,
    bgColor: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    num: '05',
    title: 'Testing & QA',
    desc: 'Manual bug hunts, write unit tests and fix regressions.',
    icon: FlaskConical,
    bgColor: 'bg-rose-100 dark:bg-rose-900/40',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    num: '06',
    title: 'Security Audits',
    desc: 'Compliance checks, vulnerability scanning and patching.',
    icon: ShieldCheck,
    bgColor: 'bg-teal-100 dark:bg-teal-900/40',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
  {
    num: '07',
    title: 'Production Deploy',
    desc: 'Manual CI/CD setup, Docker config and cloud provisioning.',
    icon: Cloud,
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/40',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    num: '08',
    title: 'Maintenance',
    desc: 'Ongoing bug fixes, updates and support tickets.',
    icon: Settings,
    bgColor: 'bg-sky-100 dark:bg-sky-900/40',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
];

const pilotSteps = [
  {
    num: '1',
    title: 'Prompt Your Idea',
    desc: 'Describe what you want to build in plain English or domain terms.',
    icon: Lightbulb,
    cardBg: 'bg-purple-100/70 dark:bg-purple-950/40 border-purple-200/60 dark:border-purple-800/40',
    iconBg: 'bg-purple-200/80 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300',
  },
  {
    num: '2',
    title: 'Autonomous Engineering',
    desc: 'Nexova handles specs → architecture → code → security → QA tests.',
    icon: Brain,
    cardBg: 'bg-blue-100/70 dark:bg-blue-950/40 border-blue-200/60 dark:border-blue-800/40',
    iconBg: 'bg-blue-200/80 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300',
  },
  {
    num: '3',
    title: 'Production Application',
    desc: 'Your full-stack application deployed and ready to scale.',
    icon: Rocket,
    cardBg: 'bg-emerald-100/70 dark:bg-emerald-950/40 border-emerald-200/60 dark:border-emerald-800/40',
    iconBg: 'bg-emerald-200/80 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300',
  },
];

export default function BigIdea() {
  return (
    <section id="platform" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 bg-violet-50 dark:bg-violet-950/40">
            ✦ Platform Comparison
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-white">
            Build real applications. <span className="gradient-text">Not just prototypes.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Compare traditional software development with Nexova&apos;s unified AI-powered lifecycle.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* TRADITIONAL DEVELOPMENT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center flex-shrink-0 text-slate-700 dark:text-slate-300">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Traditional Development
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                    Manual process. Siloed teams. High costs & long delays.
                  </p>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="relative pl-1 sm:pl-3 space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
                {/* Dotted Vertical Line */}
                <div className="absolute left-[15px] sm:left-[21px] top-4 bottom-4 w-px border-l-2 border-dashed border-slate-200 dark:border-slate-700 pointer-events-none" />

                {traditionalSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative flex items-center gap-2.5 sm:gap-3 group"
                    >
                      {/* Step Number Circle */}
                      <div className="z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 font-mono text-[10px] sm:text-xs font-bold flex-shrink-0 shadow-sm">
                        {step.num}
                      </div>

                      {/* Icon Circle */}
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full ${step.bgColor} ${step.iconColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                          {step.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-snug">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Time Box */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0 shadow-sm">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Estimated delivery timeline
                </div>
                <div className="text-lg sm:text-2xl font-black text-red-600 dark:text-red-400">
                  Weeks to Months
                </div>
              </div>
            </div>
          </motion.div>

          {/* NEXOVA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-gradient-to-br from-indigo-50/90 via-purple-50/70 to-blue-50/80 dark:from-slate-900 dark:via-indigo-950/80 dark:to-purple-950/70 border-2 border-indigo-400/60 dark:border-indigo-500/40 rounded-3xl p-5 sm:p-8 shadow-xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Light Glow Accent */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-500/30">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-indigo-950 dark:text-white">
                    Nexova
                  </h3>
                  <p className="text-indigo-900/70 dark:text-indigo-200/80 text-xs sm:text-sm mt-0.5 font-medium">
                    From idea to live — in minutes. No coding required.
                  </p>
                </div>
              </div>

              {/* Timeline Steps (1, 2, 3) */}
              <div className="relative pl-1 sm:pl-3 space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                {/* Solid Vertical Line */}
                <div className="absolute left-[16px] sm:left-[21px] top-6 bottom-6 w-0.5 bg-indigo-500 dark:bg-indigo-400 pointer-events-none" />

                {pilotSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative flex items-center gap-2.5 sm:gap-4"
                    >
                      {/* Step Badge */}
                      <div className="z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 shadow-md shadow-indigo-600/30">
                        {step.num}
                      </div>

                      {/* Content Card Pill */}
                      <div className={`flex-1 ${step.cardBg} border rounded-2xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3.5 shadow-sm backdrop-blur-sm`}>
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${step.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </div>
                          <div className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                            {step.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Accelerated Timeline Box */}
            <div className="relative z-10 pt-2">
              <div className="bg-white/95 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800/60 rounded-2xl p-3.5 sm:p-5 flex items-center justify-between shadow-md backdrop-blur-md">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-indigo-100 dark:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-300 flex-shrink-0">
                    <Gauge className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>
                  <div className="h-8 w-px bg-slate-200 dark:bg-indigo-800/60 hidden sm:block" />
                  <div>
                    <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-semibold tracking-wide">
                      Accelerated timeline
                    </div>
                    <div className="text-xl sm:text-3xl font-black text-indigo-700 dark:text-indigo-300">
                      Minutes to Hours
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-indigo-500 dark:text-indigo-400 flex-shrink-0 pl-2">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            </div>

            {/* Rocket & Clouds SVG Illustration Background Decor - Non-blocking on Mobile */}
            <div className="absolute bottom-0 right-0 w-32 h-28 sm:w-56 sm:h-48 pointer-events-none z-0 opacity-40 sm:opacity-90">
              <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M40 160C40 145 52 133 67 133C70 133 73 134 76 135C83 124 95 116 109 116C127 116 142 129 145 146C151 143 158 142 165 142C184 142 200 150 200 160H40Z" fill="url(#cloudGrad1)" />
                <path d="M0 160C0 148 12 138 27 138C35 138 42 142 47 148C54 142 64 138 75 138C94 138 110 148 110 160H0Z" fill="url(#cloudGrad2)" opacity="0.8" />
                <path d="M125 120 C 115 130, 105 135, 95 145 C 90 150, 85 155, 80 160 L 140 160 C 135 145, 130 130, 125 120 Z" fill="url(#fireGrad)" opacity="0.8" />
                
                <g transform="translate(115, 45) rotate(35)">
                  <path d="M 12 42 L 18 56 L 24 42 Z" fill="#F59E0B" />
                  <path d="M 14 42 L 18 50 L 22 42 Z" fill="#EF4444" />
                  <path d="M 4 32 L 10 40 L 10 24 Z" fill="#4338CA" />
                  <path d="M 32 32 L 26 40 L 26 24 Z" fill="#4338CA" />
                  <rect x="10" y="12" width="16" height="28" rx="3" fill="#FFFFFF" stroke="#6366F1" strokeWidth="2" />
                  <path d="M 10 14 C 10 0, 26 0, 26 14 Z" fill="#4f46e5" />
                  <circle cx="18" cy="22" r="4" fill="#38BDF8" stroke="#6366F1" strokeWidth="1.5" />
                  <circle cx="17" cy="21" r="1" fill="#FFFFFF" />
                </g>

                <defs>
                  <linearGradient id="cloudGrad1" x1="120" y1="116" x2="120" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C7D2FE" stopOpacity="0.7" />
                    <stop offset="1" stopColor="#EEF2FF" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="cloudGrad2" x1="55" y1="138" x2="55" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E0E7FF" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="fireGrad" x1="110" y1="120" x2="110" y2="160" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FBBF24" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#F43F5E" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}