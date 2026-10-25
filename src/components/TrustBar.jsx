import { motion } from 'framer-motion';

const techLogos = [
  { name: 'OpenAI', img: '/img/vecteezy_openai-chatgpt-logo-icon_22227364.png' },
  { name: 'Anthropic', img: '/img/anthropic.png' },
  { name: 'Google Cloud', img: '/img/google.png' },
  { name: 'AWS', img: '/img/aws.webp' },
  { name: 'Microsoft Azure', img: '/img/azure.png' },
  { name: 'PostgreSQL', img: '/img/Postgresql_elephant.svg.webp' },
  { name: 'Docker', img: '/img/Docker.png' },
  { name: 'Kubernetes', img: '/img/Kubernetes.webp' },
  { name: 'GitHub', img: '/img/github.png', isDarkIcon: true },
];

const doubled = [...techLogos, ...techLogos];

export default function TrustBar() {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden border-y border-slate-200/80 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">
      <div className="text-center mb-6 sm:mb-8 px-4">
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 uppercase tracking-widest font-bold">
          Trusted by modern engineering teams & enterprises
        </p>
      </div>

      {/* Marquee with smooth infinite scroll */}
      <div className="relative overflow-hidden w-full flex">
        {/* Soft edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-[#07080f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-[#07080f] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max py-1"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-2xl glass border border-slate-200/80 dark:border-white/6 flex-shrink-0 hover:border-violet-500/30 transition-all duration-200 bg-white dark:bg-slate-900/40 shadow-sm"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className={`w-full h-full object-contain ${
                    tech.isDarkIcon ? 'dark:invert' : ''
                  }`}
                  loading="lazy"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}