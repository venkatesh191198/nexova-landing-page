import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Check } from 'lucide-react';

const features = [
  {
    icon: '🔌',
    title: 'Zero Dev Bottlenecks',
    desc: 'Empower product, business and engineering teams to build production-ready applications with autonomous AI speed.',
    color: '#6366f1',
  },
  {
    icon: '🧩',
    title: 'Full-Stack Architecture',
    desc: 'Generate complete, cohesive architectures across modern frontends, backends, database layers and cloud targets.',
    color: '#8b5cf6',
  },
  {
    icon: '⚡',
    title: 'Instant Production Code',
    desc: 'Clean, strongly-typed code adhering to modern standards, unit testing best practices, and enterprise design patterns.',
    color: '#0284c7',
  },
  {
    icon: '🔒',
    title: 'Built-in Security & Audit',
    desc: 'Autonomous vulnerability scanning, secret detection, and OWASP-style compliance checks at every single stage.',
    color: '#d97706',
  },
  {
    icon: '🏗️',
    title: 'Evolvable System Design',
    desc: 'Architectures that adapt as your user base and business requirements scale from Day 1 to millions of users.',
    color: '#10b981',
  },
  {
    icon: '📈',
    title: 'Full Code Ownership',
    desc: 'No proprietary vendor lock-in. Export clean standard source code, Docker configs, and deploy anywhere in your cloud.',
    color: '#f43f5e',
  },
];

export default function WhyAIPilot() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-violet-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 bg-violet-50 dark:bg-violet-950/40">
            ✦ Core Advantages
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-slate-900 dark:text-white">Why engineering teams choose</span>
            <br />
            <span className="gradient-text">Nexova</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Bridging the gap between conceptual business ideas and robust, enterprise-grade software deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-3xl border border-slate-200 dark:border-white/6 p-5 sm:p-7 card-hover overflow-hidden glass bg-white dark:bg-slate-900/50 shadow-sm"
            >
              {/* Hover glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `${feat.color}30` }}
              />

              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110 relative"
                style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
              >
                {feat.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {feat.desc}
              </p>

              <div
                className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-xs font-bold"
                style={{ color: feat.color }}
              >
                Learn more <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MultiModelAI() {
  const aiProviders = [
    { name: 'OpenAI', icon: '⬡', color: '#10b981', angle: 0 },
    { name: 'Anthropic', icon: '◈', color: '#d97706', angle: 90 },
    { name: 'Google Gemini', icon: '◉', color: '#3b82f6', angle: 180 },
    { name: 'Nexova Engine', icon: '✦', color: '#8b5cf6', angle: 270 },
  ];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 text-violet-800 dark:text-violet-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 bg-violet-50 dark:bg-transparent">
              ✦ Multi-Model Architecture
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
              <span className="text-slate-900 dark:text-white">One platform.</span>
              <br />
              <span className="gradient-text">Multiple AI engines.</span>
            </h2>
            <p className="text-slate-700 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              Nexova orchestrates multiple AI model capabilities dynamically rather than locking your organization into a single proprietary provider. Different engineering tasks leverage specific model strengths.
            </p>
            
            <div className="space-y-2.5 sm:space-y-3">
              {[
                'OpenAI GPT-4o for complex reasoning & business analysis',
                'Anthropic Claude 3.5 Sonnet for deep code generation & architecture',
                'Google Gemini for massive multi-modal context & data schema ingestion',
                'Nexova proprietary models fine-tuned for code synthesis & test generation',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-900 dark:text-slate-300 font-semibold"
                >
                  <Zap size={14} className="text-violet-600 dark:text-violet-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Orbital visual */}
          <div className="flex justify-center w-full">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 my-4">
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center border-2 border-violet-500 bg-white dark:bg-slate-900 shadow-xl p-1.5"
                  style={{
                    boxShadow: '0 0 30px rgba(99,102,241,0.3)',
                  }}
                >
                  <img src="/img/logo-icon.png" alt="Nexova" className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
                  <span className="text-[7px] sm:text-[8px] font-extrabold text-violet-800 dark:text-violet-300 uppercase tracking-wide text-center leading-tight mt-0.5">
                    Nexova
                  </span>
                </div>
              </div>

              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 dark:border-violet-500/15 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-dashed border-violet-500/30 dark:border-violet-500/20" />

              {/* AI provider nodes */}
              {aiProviders.map((p) => {
                const rad = (p.angle * Math.PI) / 180;
                const r = 90;
                const x = 112 + r * Math.sin(rad) - 18;
                const y = 112 - r * Math.cos(rad) - 18;

                return (
                  <div
                    key={p.name}
                    className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-center bg-white dark:bg-slate-900 shadow-md border"
                    style={{
                      left: x,
                      top: y,
                      borderColor: p.color,
                      boxShadow: `0 0 15px ${p.color}30`,
                    }}
                    title={p.name}
                  >
                    <span className="text-sm sm:text-base font-bold" style={{ color: p.color }}>
                      {p.icon}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}