import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Headphones, Layers, Sparkles, ChevronRight, FileDown } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/companyData';

interface EquipmentsSectionProps {
  onNavigate: (path: string) => void;
  onOpenCatalog?: () => void;
}

export const EquipmentsSection: React.FC<EquipmentsSectionProps> = ({ onNavigate, onOpenCatalog }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>(PRODUCT_CATEGORIES[0].id);

  const activeCategory = PRODUCT_CATEGORIES.find((c) => c.id === activeCategoryId) || PRODUCT_CATEGORIES[0];

  return (
    <section className="bg-gradient-to-b from-slate-50/90 via-white to-slate-50/60 py-24 border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              <span className="w-2 h-0.5 bg-blue-600 rounded-full" />
              <span>Pôle Équipements & Approvisionnement Pro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Tout pour équiper votre entreprise
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Une prise en charge intégrale de vos parcs informatiques, réseaux, consommables et espaces de travail au Maroc. Matériels garantis constructeurs et déploiement sur site clé en main.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('/produits')}
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Explorer nos catégories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={COMPANY_INFO.catalogPdfUrl}
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Catalogue PDF</span>
            </a>
          </div>
        </div>

        {/* Master Interactive Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Interactive Category Rail (5 Categories) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-slate-50/50 p-4 sm:p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 pb-1">
                Familles d'équipements disponibles
              </div>

              {PRODUCT_CATEGORIES.map((cat, idx) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-4 cursor-pointer relative ${
                      isActive
                        ? 'bg-white shadow-md shadow-slate-200/60 border border-slate-200 text-slate-900'
                        : 'hover:bg-slate-100/70 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-3 bottom-3 w-1 bg-blue-600 rounded-r-full" />
                    )}

                    <div
                      className={`text-sm font-bold tabular-nums shrink-0 pt-0.5 ${
                        isActive ? 'text-blue-600' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {cat.title}
                        </h3>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-blue-600 translate-x-1' : 'text-slate-300'
                          }`}
                        />
                      </div>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick trust reassurance footer inside rail */}
            <div className="pt-6 mt-4 border-t border-slate-200/80 px-3 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Garanties 100% constructeurs</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Truck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Livraison nationale Maroc</span>
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Stage & Selected Category Spotlight */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white relative">
            <div>
              {/* Category Header & Tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[11px] font-bold">
                    Catégorie sélectionnée
                  </span>
                </div>

                <div className="text-xs text-slate-400 font-medium">
                  Réponse devis sous 24h ouvrées
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeCategory.title}
              </h3>

              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {activeCategory.fullDesc}
              </p>

              {/* Main Media Visual Frame */}
              <div className="relative mt-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-100 aspect-16/9 sm:aspect-21/9">
                <img
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out animate-in fade-in zoom-in-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Specs Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-md text-slate-900">
                  <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Exemples de matériels fournis :
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700 font-medium">
                    {activeCategory.equipmentExamples.map((ex, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-600" />
                        <span>{ex}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Points & Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                {activeCategory.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions for this category */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => onNavigate(`/demande-devis?cat=${activeCategory.id}`)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Demander un devis ({activeCategory.title})</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate(`/produits?cat=${activeCategory.id}`)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Voir toutes les spécifications &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 4 Corporate Service Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Matériel Garanti Pro</div>
              <div className="text-xs text-slate-500 mt-1">Garanties constructeurs officielles avec assistance directe.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Déploiement National</div>
              <div className="text-xs text-slate-500 mt-1">Acheminement sécurisé et installation dans vos locaux au Maroc.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Interlocuteur Dédié</div>
              <div className="text-xs text-slate-500 mt-1">Salma El Mejjaty coordonne vos cotations et plannings de livraison.</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Devis B2B sous 24h</div>
              <div className="text-xs text-slate-500 mt-1">Tarifs dégressifs négociés selon vos volumes et réassorts.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
