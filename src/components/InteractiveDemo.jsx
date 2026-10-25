import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, CheckCircle, Circle, ArrowRight, Sparkles } from 'lucide-react';

const buildSteps = [
  'Understanding requirements...',
  'Designing architecture & schema...',
  'Creating database models...',
  'Generating frontend interfaces...',
  'Building backend APIs & auth...',
  'Running automated security scan...',
  'Executing QA test suite...',
  'Preparing production deployment...',
];

const outputTabs = ['App', 'Code', 'Architecture', 'Database', 'Security', 'QA'];

export default function InteractiveDemo() {
  const [building, setBuilding] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [done, setDone] = useState(false);
  const [activeTab, setActiveTab] = useState('App');
  const [prompt, setPrompt] = useState(
    'Build an e-commerce platform for a fashion brand with customer accounts, product catalog, inventory, Stripe payments, order management, and admin dashboard.'
  );

  const startBuild = () => {
    if (building) return;
    setBuilding(true);
    setCompleted([]);
    setDone(false);

    buildSteps.forEach((_, i) => {
      setTimeout(() => {
        setCompleted((prev) => [...prev, i]);
        if (i === buildSteps.length - 1) {
          setTimeout(() => {
            setDone(true);
            setBuilding(false);
          }, 400);
        }
      }, (i + 1) * 750);
    });
  };

  return (
    <section id="demo" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 text-cyan-800 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 bg-cyan-50 dark:bg-transparent">
            ✦ Interactive Demo
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="text-slate-900 dark:text-white">See Nexova</span>
            <br />
            <span className="gradient-text">build an application.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Test how Nexova processes natural language prompts into a complete software architecture and application.
          </p>
        </motion.div>

        {/* Demo window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-3xl border border-slate-300 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0a0a14]/90 shadow-2xl"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-slate-800/60">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-3 py-0.5 rounded-lg bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-400 font-mono font-bold truncate max-w-[220px] sm:max-w-none text-center">
                app.nexova.io/workspace/build
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 min-h-[460px]">
            {/* Left panel: Prompt editor */}
            <div className="md:col-span-2 p-4 sm:p-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Prompt Specification
                </h3>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700/60 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-slate-900 dark:text-slate-200 resize-none focus:outline-none focus:border-violet-500 transition-colors font-mono leading-relaxed min-h-[120px] sm:min-h-[150px] font-medium"
                  placeholder="Describe the application you want to build..."
                />

                <button
                  onClick={startBuild}
                  disabled={building}
                  className={`mt-3 w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    building
                      ? 'bg-slate-200 dark:bg-white/5 text-slate-500 cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                >
                  {building ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Building Application...
                    </>
                  ) : (
                    <>
                      <Play size={15} fill="currentColor" />
                      Build Application
                    </>
                  )}
                </button>
              </div>

              {/* Steps timeline */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-1.5">
                {buildSteps.map((step, i) => (
                  <div
                    key={step}
                    className={`flex items-center gap-2 text-xs transition-colors duration-300 ${
                      completed.includes(i)
                        ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                        : building && i === completed.length
                        ? 'text-violet-700 dark:text-violet-300 font-bold'
                        : 'text-slate-500 dark:text-slate-500 font-medium'
                    }`}
                  >
                    {completed.includes(i) ? (
                      <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    ) : building && i === completed.length ? (
                      <div className="w-3.5 h-3.5 border border-violet-500/50 border-t-violet-500 rounded-full animate-spin flex-shrink-0" />
                    ) : (
                      <Circle size={13} className="flex-shrink-0" />
                    )}
                    <span className="truncate">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel: Output */}
            <div className="md:col-span-3 flex flex-col bg-slate-50/50 dark:bg-transparent">
              {/* Output Tabs - Smooth touch scrolling on mobile */}
              <div className="flex gap-1.5 p-2.5 sm:p-3 border-b border-slate-200 dark:border-white/5 overflow-x-auto no-scrollbar bg-white dark:bg-transparent">
                {outputTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    disabled={!done}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                      activeTab === tab && done
                        ? 'bg-violet-100 text-violet-900 border border-violet-300 dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/30'
                        : done
                        ? 'text-slate-700 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                        : 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60'
                    }`}
                  >
                    {tab === 'App' ? '📱' : tab === 'Code' ? '⚡' : tab === 'Architecture' ? '🏗️' : tab === 'Database' ? '🗄️' : tab === 'Security' ? '🔒' : '✅'} {tab}
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div className="flex-1 p-4 sm:p-6 flex items-center justify-center">
                {!done && !building && (
                  <div className="text-center p-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-100 dark:bg-violet-500/10 border border-violet-300 dark:border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                      <Play size={22} className="text-violet-700 dark:text-violet-400 ml-1" />
                    </div>
                    <p className="text-slate-900 dark:text-slate-200 text-sm font-bold">
                      Click &quot;Build Application&quot; to test Nexova
                    </p>
                    <p className="text-slate-500 text-xs mt-1 font-medium">
                      The autonomous engineering workflow executes in real-time
                    </p>
                  </div>
                )}

                {building && !done && (
                  <div className="text-center p-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5">
                      <div className="absolute inset-0 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin" />
                      <div className="absolute inset-2 rounded-full border-2 border-cyan-500/20 border-b-cyan-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles size={20} className="text-violet-500" />
                      </div>
                    </div>
                    <p className="text-slate-900 dark:text-white font-bold text-sm sm:text-base mb-1">
                      Nexova is building your application
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium">
                      {buildSteps[completed.length] || 'Finalizing deployment artifact...'}
                    </p>
                  </div>
                )}

                {done && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full"
                  >
                    {activeTab === 'App' && (
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0.85, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/30 mb-5"
                        >
                          <CheckCircle size={18} className="text-emerald-700 dark:text-emerald-400" />
                          <span className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-400 font-bold">
                            Application Deployed & Online
                          </span>
                        </motion.div>
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm mb-5 font-medium max-w-sm mx-auto">
                          Fashion e-commerce platform successfully provisioned with PostgreSQL, NestJS backend, and Next.js frontend.
                        </p>
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 max-w-sm mx-auto">
                          {['Open Application', 'View Code Files', 'Inspect Architecture', 'Security Certificate'].map((btn, i) => (
                            <motion.button
                              key={btn}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-300 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-violet-500 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                            >
                              <ArrowRight size={12} />
                              <span>{btn}</span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'Code' && (
                      <div className="rounded-xl bg-slate-900 dark:bg-black/40 border border-slate-700 dark:border-white/5 p-3.5 text-left overflow-auto max-h-60 no-scrollbar touch-pan-x">
                        <pre className="text-xs text-slate-100 dark:text-slate-300 font-mono leading-relaxed">
{`// Nexova Generated — Fashion E-Commerce Platform
// AuthController.ts

import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}`}
                        </pre>
                      </div>
                    )}

                    {activeTab === 'Architecture' && (
                      <div className="space-y-1.5 sm:space-y-2 max-h-64 overflow-y-auto pr-1">
                        {['Frontend (Next.js 14 SSR)', 'API Gateway (Kong / NGINX)', 'Auth Service (JWT + Argon2)', 'Product Catalog & Inventory', 'Order & Stripe Checkout Service', 'PostgreSQL Cluster + Redis Grid', 'Cloud Infra (AWS EKS + Terraform)'].map((layer, i) => (
                          <motion.div
                            key={layer}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm text-xs font-mono font-bold text-slate-900 dark:text-slate-200"
                          >
                            <div className="w-2 h-2 rounded-full bg-violet-600 dark:bg-violet-400 flex-shrink-0" />
                            <span className="truncate">{layer}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'Database' && (
                      <div className="rounded-xl bg-slate-900 dark:bg-black/40 border border-slate-700 dark:border-white/5 p-3.5 text-left overflow-auto max-h-60 no-scrollbar touch-pan-x">
                        <pre className="text-xs text-emerald-400 font-mono leading-relaxed">
{`-- Generated Database Schema (PostgreSQL 16)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  total_cents INT NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  stripe_payment_id VARCHAR(255)
);`}
                        </pre>
                      </div>
                    )}

                    {activeTab === 'Security' && (
                      <div className="space-y-1.5 sm:space-y-2 max-h-64 overflow-y-auto pr-1">
                        {[
                          { label: 'Authentication & Session Tokens', status: 'Passed' },
                          { label: 'Role-Based Access Control (RBAC)', status: 'Passed' },
                          { label: 'SQL Injection / XSS Sanitization', status: 'Passed' },
                          { label: 'Rate Limiting & DDoS Shield', status: 'Passed' },
                          { label: 'Secret Detection & Key Audit', status: 'Passed' },
                        ].map(({ label, status }, i) => (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.06 }}
                            className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm text-xs"
                          >
                            <span className="font-bold text-slate-900 dark:text-slate-200 truncate pr-2">{label}</span>
                            <span className="font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 flex-shrink-0">
                              ✓ {status}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeTab === 'QA' && (
                      <div className="space-y-1.5 sm:space-y-2 max-h-64 overflow-y-auto pr-1">
                        {[
                          { label: 'Authentication Test Suite (42 scenarios)', status: '100% Passed' },
                          { label: 'Payment Gateway Integration Suite', status: '100% Passed' },
                          { label: 'Database Concurrency & ACID Tests', status: '100% Passed' },
                          { label: 'API Contract Validation Suite', status: '100% Passed' },
                        ].map(({ label, status }, i) => (
                          <div
                            key={label}
                            className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 shadow-sm text-xs"
                          >
                            <span className="font-bold text-slate-900 dark:text-slate-200 truncate pr-2">{label}</span>
                            <span className="font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-400 flex-shrink-0">
                              ✓ {status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}