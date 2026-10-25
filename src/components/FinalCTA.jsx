import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const workflowSteps = [
  'Business Idea',
  'Requirements',
  'Architecture',
  'Code Generation',
  'Database Design',
  'Security Scan',
  'QA Testing',
  'Deployment',
];

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[400px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-300 dark:border-violet-500/30 text-violet-800 dark:text-violet-300 text-xs sm:text-sm font-bold mb-8 sm:mb-10 bg-violet-50 dark:bg-transparent shadow-sm">
            <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse" />
            Start building today
          </div>

          {/* Headline - 100% Mobile Responsive */}
          <h2 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-5 sm:mb-8">
            <span className="text-slate-900 dark:text-white">Your next application</span>
            <br />
            <span className="gradient-text">starts with a prompt.</span>
          </h2>

          <p className="text-slate-700 dark:text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-medium">
            Stop starting every software project from scratch. Describe what you want to build.
            Let Nexova transform your idea into a complete, secure, production-ready application.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-xl"
            >
              <Sparkles size={18} />
              Start Building with Nexova
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-bold w-full sm:w-auto text-center"
            >
              Book a Live Demo
            </motion.a>
          </div>

          {/* Guarantee / Benefits */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Build in minutes
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Full code ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-emerald-500" />
              Zero vendor lock-in
            </span>
          </div>
        </motion.div>

        {/* Floating brand statement & workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-slate-200 dark:border-white/5"
        >
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 uppercase tracking-widest font-extrabold">
            The Complete Autonomous Workflow
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300">
            {workflowSteps.map((item, i) => (
              <span key={item} className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-lg border border-slate-200/60 dark:border-white/5">
                <span>{item}</span>
                {i < workflowSteps.length - 1 && (
                  <span className="text-violet-600 dark:text-violet-400 text-xs font-mono">→</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}