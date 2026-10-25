import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const integrationCategories = [
  {
    label: 'AI Models',
    color: '#6366f1',
    items: ['OpenAI GPT-4o', 'Anthropic Claude 3.5', 'Google Gemini 1.5 Pro', 'Nexova AI Engine'],
  },
  {
    label: 'Cloud & Deploy',
    color: '#d97706',
    items: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'Vercel / Cloudflare'],
  },
  {
    label: 'DevOps & Tooling',
    color: '#0284c7',
    items: ['GitHub Actions', 'GitLab CI', 'Docker Containers', 'Kubernetes Clusters'],
  },
  {
    label: 'Databases & Cache',
    color: '#10b981',
    items: ['PostgreSQL 16', 'MySQL Enterprise', 'MongoDB Atlas', 'Redis Grid', 'Elasticsearch'],
  },
  {
    label: 'Ecosystem & APIs',
    color: '#f43f5e',
    items: ['Stripe Checkout', 'Twilio Communications', 'SendGrid', 'Salesforce CRM', 'SAP ERP'],
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 bg-cyan-50 dark:bg-transparent">
            ✦ Ecosystem & Stack
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            <span className="text-slate-900 dark:text-white">Connect the tools</span>
            <br />
            <span className="gradient-text">your business already uses.</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Nexova seamlessly provisions and integrates across leading cloud providers, foundational AI models, database clusters, and SaaS APIs.
          </p>
        </motion.div>

        <div className="space-y-5 sm:space-y-6 max-w-5xl mx-auto">
          {integrationCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05, duration: 0.4 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-2.5 sm:mb-3">
                <div
                  className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider flex-shrink-0"
                  style={{ background: `${cat.color}20`, color: cat.color, border: `1px solid ${cat.color}30` }}
                >
                  {cat.label}
                </div>
                <div className="flex-1 h-px bg-slate-200 dark:bg-white/5" />
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl glass border border-slate-200 dark:border-white/6 hover:border-slate-300 dark:hover:border-white/15 transition-all duration-200 cursor-default bg-white dark:bg-slate-900/50 shadow-sm"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
                {ci === integrationCategories.length - 1 && (
                  <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-dashed border-slate-300 dark:border-white/10 flex items-center text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-bold">
                    + 100s More Integrations
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}