import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Cpu, Sparkles, ShieldCheck, Laptop, Network, Layers, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0A1628 1px, transparent 1px), radial-gradient(#0A1628 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Atmospheric Ambient Glows (Cobalt & Cyan) */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================
              COLONNE GAUCHE — MESSAGE MARKETING & ACTIONS
              ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/5 border border-slate-900/10 text-slate-800 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>Partenaire Technologique & Conseil IT · Maroc</span>
            </div>

            {/* Titre Principal court, puissant et mémorable */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.07] text-balance">
              Vos ambitions. <br className="hidden sm:inline" />
              Notre expertise. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
                Des solutions concrètes.
              </span>
            </h1>

            {/* Sous-titre */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
              PRAGMA TECHNOLOGIES accompagne les entreprises dans leur transformation digitale à travers des solutions IT, des équipements professionnels et des services innovants adaptés à leurs besoins.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => onNavigate('/services')}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-blue-600/25 inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Découvrir nos expertises</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 active:scale-98 font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-xs inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Parlons de votre projet</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>

            {/* Bandeau de Réassurance & Chiffres Clés */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-xl text-slate-600">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                  24h - 48h
                </div>
                <div className="text-xs text-slate-500 mt-1">Délai d'étude & devis B2B</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-1">Couverture nationale Maroc</div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums tracking-tight">
                  3 Pôles
                </div>
                <div className="text-xs text-slate-500 mt-1">Expertises complémentaires</div>
              </div>
            </div>
          </motion.div>

          {/* ========================================================
              COLONNE DROITE — COMPOSITION GRAPHIQUE INNOVATION
              ======================================================== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-[#0A1628] group">
              
              {/* Photo centrale Corporate Tech & Consulting */}
              <div className="relative h-[420px] sm:h-[480px] overflow-hidden">
                <img
                  src="/src/assets/images/hero_corporate_tech_1792405291182.jpg"
                  alt="PRAGMA TECHNOLOGIES Centre d'Expertise"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000 ease-out opacity-90"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent pointer-events-none" />
              </div>

              {/* FLOATING CARD 1: Consulting IT & SaaS (Top-Left) */}
              <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl max-w-[210px] animate-in fade-in slide-in-from-top-2 duration-700">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">
                      Consulting IT & SaaS
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Ingénierie sur-mesure
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING CARD 2: Design UX/UI (Top-Right) */}
              <div className="absolute top-5 right-5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl max-w-[200px] animate-in fade-in slide-in-from-top-2 duration-700 delay-150">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 leading-tight">
                      Design UX/UI
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Expériences Métiers
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM STRIP: Équipements Pro & Déploiement Maroc */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Fourniture & Équipements Pro</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    Casablanca · Maroc
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10 text-[11px] text-slate-300">
                  <div className="flex items-center justify-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-blue-400" />
                    <span>Postes & Laptops</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Network className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Réseau & Wi-Fi</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mobilier Pro</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
