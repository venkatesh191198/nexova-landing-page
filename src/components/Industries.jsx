import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Factory,
  Laptop,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Truck,
  Check,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    title: 'Manufacturing & Industrial',
    category: 'PRODUCTION DASHBOARD',
    desc: 'Optimize plant throughput, automated telemetry, and quality control at scale.',
    icon: Factory,
    cardBg: 'bg-gradient-to-br from-amber-50/90 via-amber-50/50 to-orange-100/60 dark:from-slate-900 dark:via-amber-950/30 dark:to-orange-950/20 border-amber-200/80 dark:border-amber-800/40',
    iconBg: 'from-amber-500 to-orange-500',
    pillBg: 'bg-amber-100/80 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300',
    checkBg: 'bg-amber-500 text-white',
    arrowBg: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 group-hover:bg-amber-500 group-hover:text-white',
    features: ['Custom ERP systems', 'Production telemetry', 'Supply inventory', 'Quality audits'],
  },
  {
    title: 'Technology & SaaS',
    category: 'DEVELOPER PLATFORM',
    desc: 'Accelerate product roadmaps with scalable multi-tenant SaaS architectures.',
    icon: Laptop,
    cardBg: 'bg-gradient-to-br from-indigo-50/90 via-blue-50/50 to-indigo-100/60 dark:from-slate-900 dark:via-indigo-950/30 dark:to-blue-950/20 border-indigo-200/80 dark:border-indigo-800/40',
    iconBg: 'from-indigo-500 to-blue-600',
    pillBg: 'bg-indigo-100/80 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300',
    checkBg: 'bg-indigo-600 text-white',
    arrowBg: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white',
    features: ['Multi-tenant SaaS', 'Developer tooling', 'API microservices', 'Automation pipelines'],
  },
  {
    title: 'Healthcare & Life Sciences',
    category: 'PATIENT MANAGEMENT',
    desc: 'Better clinical workflows, HIPAA-compliant patient management, and health records.',
    icon: HeartPulse,
    cardBg: 'bg-gradient-to-br from-emerald-50/90 via-teal-50/50 to-emerald-100/60 dark:from-slate-900 dark:via-emerald-950/30 dark:to-teal-950/20 border-emerald-200/80 dark:border-emerald-800/40',
    iconBg: 'from-emerald-400 to-teal-500',
    pillBg: 'bg-emerald-100/80 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300',
    checkBg: 'bg-emerald-500 text-white',
    arrowBg: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white',
    features: ['Patient portals', 'Clinical workflows', 'HIPAA compliant apps', 'EHR connectors'],
  },
  {
    title: 'Finance & Banking',
    category: 'FINANCIAL PLATFORM',
    desc: 'Ultra-secure financial operations, automated ledgering, and real-time auditability.',
    icon: Landmark,
    cardBg: 'bg-gradient-to-br from-purple-50/90 via-violet-50/50 to-purple-100/60 dark:from-slate-900 dark:via-purple-950/30 dark:to-violet-950/20 border-purple-200/80 dark:border-purple-800/40',
    iconBg: 'from-purple-500 to-violet-600',
    pillBg: 'bg-purple-100/80 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300',
    checkBg: 'bg-purple-600 text-white',
    arrowBg: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 group-hover:bg-purple-600 group-hover:text-white',
    features: ['Fintech platforms', 'Payment pipelines', 'Audit ledger systems', 'Fraud telemetry'],
  },
  {
    title: 'Retail & E-Commerce',
    category: 'COMMERCE PLATFORM',
    desc: 'Seamless omni-channel shopping, automated inventory management, and fast checkouts.',
    icon: ShoppingCart,
    cardBg: 'bg-gradient-to-br from-pink-50/90 via-rose-50/50 to-pink-100/60 dark:from-slate-900 dark:via-pink-950/30 dark:to-rose-950/20 border-pink-200/80 dark:border-pink-800/40',
    iconBg: 'from-pink-500 to-rose-600',
    pillBg: 'bg-pink-100/80 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300',
    checkBg: 'bg-pink-500 text-white',
    arrowBg: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 group-hover:bg-pink-500 group-hover:text-white',
    features: ['Custom storefronts', 'Live inventory sync', 'Cart & checkout APIs', 'Order tracking'],
  },
  {
    title: 'Transportation & Logistics',
    category: 'FLEET DISPATCH',
    desc: 'Live fleet GPS dispatch, warehouse management, and routing optimization.',
    icon: Truck,
    cardBg: 'bg-gradient-to-br from-sky-50/90 via-blue-50/50 to-sky-100/60 dark:from-slate-900 dark:via-sky-950/30 dark:to-blue-950/20 border-sky-200/80 dark:border-sky-800/40',
    iconBg: 'from-sky-400 to-blue-600',
    pillBg: 'bg-sky-100/80 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300',
    checkBg: 'bg-sky-500 text-white',
    arrowBg: 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 group-hover:bg-sky-500 group-hover:text-white',
    features: ['Fleet routing & GPS', 'Warehouse ops', 'Shipment dispatch', 'Driver dashboards'],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/20 text-violet-700 dark:text-violet-300 text-xs font-bold uppercase tracking-wider mb-4 bg-violet-50 dark:bg-violet-950/40">
            ✦ Enterprise Verticals
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-slate-900 dark:text-white">
            One AI engineering platform. <span className="gradient-text">Built for every industry.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Deploy custom applications tailored to industry standards, security regulations, and operational needs.
          </p>
        </motion.div>

        {/* 3x2 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-stretch">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`${ind.cardBg} border rounded-3xl p-5 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Row: Icon Badge + Title & Category */}
                  <div className="flex items-start gap-3.5 sm:gap-4 mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${ind.iconBg} text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                        {ind.title}
                      </h3>
                      <span className={`inline-block px-2 sm:px-2.5 py-0.5 rounded-full font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider mt-1.5 ${ind.pillBg}`}>
                        {ind.category}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-5">
                    {ind.desc}
                  </p>

                  {/* Bullet List with Checkmarks */}
                  <div className="space-y-2 mb-6">
                    {ind.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
                        <div className={`w-4 h-4 rounded-full ${ind.checkBg} flex items-center justify-center flex-shrink-0 text-[10px]`}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200/50 dark:border-white/5">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    Explore solutions
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${ind.arrowBg} flex items-center justify-center transition-all duration-300 shadow-sm`}>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}