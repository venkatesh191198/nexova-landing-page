import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronRight, Sparkles, Terminal, Bot } from 'lucide-react';

const stages = [
  { label: 'IDEA',         short: 'IDEA',  img: '/img/ICONS/icons8-idea-120.png',        color: '#6366f1' },
  { label: 'REQUIREMENTS', short: 'REQ',   img: '/img/ICONS/icons8-requirement-64.png',   color: '#7c3aed' },
  { label: 'ARCHITECTURE', short: 'ARCH',  img: '/img/ICONS/icons8-build-48.png',         color: '#8b5cf6' },
  { label: 'DATABASE',     short: 'DATA',  img: '/img/ICONS/icons8-database-100.png',     color: '#a78bfa' },
  { label: 'CODE',         short: 'CODE',  img: '/img/ICONS/icons8-code-64.png',          color: '#0284c7' },
  { label: 'SECURITY',     short: 'SEC',   img: '/img/ICONS/icons8-security-lock-48.png', color: '#d97706' },
  { label: 'QA',           short: 'QA',    img: '/img/ICONS/icons8-check-48.png',         color: '#10b981' },
  { label: 'DEPLOY',       short: 'DEPLOY',img: '/img/ICONS/icons8-launch-48.png',        color: '#f59e0b' },
];

const completionSteps = [
  'Requirements Generated ✓',
  'Architecture Designed ✓',
  'Database Generated ✓',
  'Application Built ✓',
  'Security Scanned ✓',
  'QA Passed ✓',
  'Deployment Ready ✓',
];

const lifecyclePills = [
  { name: 'Plan', desc: 'Requirement specs & user stories', color: '#8b5cf6' },
  { name: 'Develop', desc: 'Full-stack code & database', color: '#3b82f6' },
  { name: 'Deploy', desc: 'Cloud infra & CI/CD pipelines', color: '#06b6d4' },
  { name: 'Operate', desc: 'Real-time telemetry & uptime', color: '#10b981' },
  { name: 'Grow', desc: 'Scaling & continuous feature dev', color: '#a855f7' },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [activeStage, setActiveStage] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [heroView, setHeroView] = useState('character'); // 'character' | 'terminal'
  const [activePill, setActivePill] = useState('Plan');

  // Animate stages cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  // Auto-run build animation
  useEffect(() => {
    const runAnimation = () => {
      setCompletedSteps([]);
      completionSteps.forEach((_, i) => {
        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, i]);
        }, (i + 1) * 800);
      });
    };
    const timeout = setTimeout(runAnimation, 1200);
    const loop = setInterval(runAnimation, 12000);
    return () => {
      clearTimeout(timeout);
      clearInterval(loop);
    };
  }, []);

  // Particle canvas (dark mode only, non-blocking)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const particleCount = window.innerWidth < 640 ? 25 : 55;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * (canvas.width || 400),
        y: Math.random() * (canvas.height || 600),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.4,
        alpha: Math.random() * 0.4 + 0.1,
        color: ['#6366f1', '#8b5cf6', '#0284c7', '#a78bfa'][Math.floor(Math.random() * 4)],
      });
    }

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Connections
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 70)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-start lg:justify-center overflow-hidden pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
      {/* Sky background image — light mode only */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: 'url(/img/9b8f0091-c3b3-48cf-9906-7b97e319e215.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Soft white overlay for readability (light mode) */}
      <div className="absolute inset-0 dark:hidden bg-gradient-to-b from-white/70 via-white/85 to-white" />
      <div className="absolute bottom-0 left-0 right-0 h-40 dark:hidden bg-gradient-to-t from-white to-transparent" />

      {/* Dark mode background effects */}
      <div className="absolute inset-0 hidden dark:block bg-grid opacity-100" />
      <div className="absolute inset-0 hidden dark:block bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none hidden dark:block" />

      {/* Particle canvas — pointer-events-none so mobile scrolling works cleanly */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden dark:block"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Text content (7 cols on lg) */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-5 sm:mb-7"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-violet-400/60 dark:border-violet-500/30 text-xs sm:text-sm font-bold text-violet-900 dark:text-violet-300 bg-white/70 dark:bg-violet-950/40 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse" />
                ✦ AI-POWERED APPLICATION ENGINEERING
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-4 sm:mb-6"
            >
              <span className="text-slate-900 dark:text-white">Revolution</span>
              <br />
              <span className="gradient-text">in IT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg xs:text-xl sm:text-2xl text-slate-800 dark:text-slate-200 font-bold mb-3 sm:mb-4 leading-snug"
            >
              Create end-to-end architecture & applications in minutes —{' '}
              <span className="text-violet-700 dark:text-violet-400 font-extrabold">without traditional coding.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-700 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed max-w-xl font-medium"
            >
              From a single prompt, Nexova acts as your AI engineering partner — generating requirements,
              architecture, database design, full-stack code, security analysis, QA tests, and deployment.
            </motion.p>

            {/* CTA Buttons - 100% Mobile Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="#demo"
                className="btn-primary flex items-center justify-center gap-2 text-base px-7 py-3.5 rounded-xl font-bold w-full sm:w-auto shadow-lg"
              >
                Start Building Free
                <ArrowRight size={18} />
              </a>
              <a
                href="#demo"
                className="btn-secondary flex items-center justify-center gap-2.5 text-base px-6 py-3.5 rounded-xl font-semibold w-full sm:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-800 dark:text-white">
                  <Play size={11} fill="currentColor" />
                </div>
                Watch Live Demo
              </a>
            </motion.div>

            {/* Micro Benefit Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-violet-600 dark:text-violet-400 flex-shrink-0" />
                No credit card required
              </span>
              <span className="hidden xs:inline text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-violet-600 dark:text-violet-400 flex-shrink-0" />
                Multi-model AI support
              </span>
              <span className="hidden xs:inline text-slate-300 dark:text-slate-700">·</span>
              <span className="flex items-center gap-1.5">
                <ChevronRight size={14} className="text-violet-600 dark:text-violet-400 flex-shrink-0" />
                Production ready
              </span>
            </motion.div>
          </div>

          {/* Right: Interactive Hero Showcase (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600/25 via-indigo-500/15 to-cyan-500/25 blur-xl pointer-events-none" />

            <div className="relative glass rounded-3xl border border-slate-200/90 dark:border-white/10 overflow-hidden shadow-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl p-4 sm:p-6">
              
              {/* Top View Switcher Header */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200/80 dark:border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>

                {/* View Switcher Pill Buttons */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700/60 text-xs font-bold">
                  <button
                    onClick={() => setHeroView('character')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      heroView === 'character'
                        ? 'bg-white dark:bg-violet-600 text-violet-700 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Bot size={13} />
                    <span>AI Partner</span>
                  </button>
                  <button
                    onClick={() => setHeroView('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                      heroView === 'terminal'
                        ? 'bg-white dark:bg-violet-600 text-violet-700 dark:text-white shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Terminal size={13} />
                    <span>Pipeline</span>
                  </button>
                </div>

                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="hidden xs:inline">Active</span>
                </div>
              </div>

              {/* VIEW 1: CHARACTER SHOWCASE */}
              <AnimatePresence mode="wait">
                {heroView === 'character' ? (
                  <motion.div
                    key="character"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Badge */}
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono text-violet-700 dark:text-violet-400 flex items-center gap-1.5">
                        <Sparkles size={13} />
                        Your End-to-End App Partner
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-300">
                        Nexova Mascot
                      </span>
                    </div>

                    {/* Character Graphic Display */}
                    <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[400px] my-1 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-violet-50/50 via-slate-50/30 to-indigo-50/40 dark:from-violet-950/20 dark:via-slate-900/40 dark:to-indigo-950/30 border border-violet-200/50 dark:border-white/5 p-2">
                      
                      {/* Ambient Halo behind character */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-500/15 via-cyan-400/10 to-indigo-500/20 blur-2xl pointer-events-none" />

                      {/* Main Character Image */}
                      <img
                        src="/img/character.png"
                        alt="Nexova End-to-End App Partner"
                        className="relative z-10 w-full h-full object-contain animate-character-float drop-shadow-xl"
                        loading="eager"
                      />

                      {/* Subtle floating badge */}
                      <div className="absolute bottom-2.5 left-2.5 z-20 px-2.5 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">
                          IDEA → CODE → LIVE
                        </span>
                      </div>
                    </div>

                    {/* Lifecycle Pills Row */}
                    <div className="w-full mt-2 pt-3 border-t border-slate-200/80 dark:border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Lifecycle Coverage
                        </span>
                        <span className="text-[11px] font-semibold text-violet-600 dark:text-violet-400">
                          {activePill}: {lifecyclePills.find(p => p.name === activePill)?.desc}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-5 gap-1.5">
                        {lifecyclePills.map((pill) => (
                          <button
                            key={pill.name}
                            onClick={() => setActivePill(pill.name)}
                            className={`py-1.5 px-1 rounded-lg text-center text-xs font-bold transition-all duration-200 ${
                              activePill === pill.name
                                ? 'bg-violet-600 text-white shadow-sm scale-105'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            {pill.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* VIEW 2: COMMAND CENTER / PIPELINE */
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Prompt Box */}
                    <div className="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-violet-700 dark:text-violet-400 font-mono font-bold">$ prompt</span>
                        <span className="text-[10px] font-mono text-slate-500">Autonomous Execution</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-900 dark:text-slate-200 leading-relaxed font-mono font-medium">
                        &quot;Build a multi-tenant healthcare platform with patient portal, appointments, billing, role-based access and audit logs.&quot;
                      </p>
                    </div>

                    {/* Pipeline Stage Cards (2x4 on mobile, 4x2 on tablet/desktop) */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-xs text-slate-700 dark:text-slate-400 uppercase tracking-wider font-bold">
                          Active Engineering Pipeline
                        </span>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Step {activeStage + 1} of 8
                        </span>
                      </div>

                      <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                        {stages.map((stage, i) => (
                          <motion.div
                            key={stage.label}
                            className={`relative p-2 sm:p-2.5 rounded-xl border text-center transition-all duration-300 ${
                              i <= activeStage
                                ? 'border-violet-500 bg-violet-50 dark:bg-violet-500/15 shadow-sm'
                                : 'border-slate-200 dark:border-slate-700/60 bg-slate-100/60 dark:bg-slate-800/40'
                            }`}
                            animate={{
                              scale: i === activeStage ? 1.04 : 1,
                            }}
                          >
                            <div className="flex items-center justify-center h-5 sm:h-6 mb-1">
                              <img
                                src={stage.img}
                                alt={stage.label}
                                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                                style={{ filter: i > activeStage ? 'grayscale(70%) opacity(0.5)' : 'none' }}
                              />
                            </div>
                            <div className={`text-[8px] sm:text-[9px] tracking-tight truncate ${
                              i <= activeStage ? 'text-slate-900 dark:text-slate-200 font-bold' : 'text-slate-500 dark:text-slate-500 font-medium'
                            }`}>
                              <span className="hidden sm:inline">{stage.label}</span>
                              <span className="sm:hidden">{stage.short}</span>
                            </div>
                            {i <= activeStage && (
                              <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Completion Checklist */}
                    <div className="space-y-1 sm:space-y-1.5 max-h-[170px] overflow-y-auto pr-1">
                      {completionSteps.map((step, i) => (
                        <div
                          key={step}
                          className="flex items-center gap-2 py-1 px-2.5 rounded-lg text-xs transition-colors duration-300"
                          style={{
                            background: completedSteps.includes(i) ? 'rgba(16,185,129,0.12)' : 'transparent',
                          }}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 ${
                              completedSteps.includes(i)
                                ? 'bg-emerald-600 text-white font-bold'
                                : 'bg-slate-200 dark:bg-white/10 text-slate-500'
                            }`}
                          >
                            {completedSteps.includes(i) ? '✓' : '○'}
                          </div>
                          <span
                            className={`truncate ${
                              completedSteps.includes(i) ? 'text-emerald-800 dark:text-emerald-400 font-bold' : 'text-slate-600 dark:text-slate-500'
                            }`}
                          >
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}