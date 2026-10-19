import React from 'react';
import { ArrowRight, Sparkles, Clock, CheckCircle2, ShieldCheck, Layers, Cpu } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Solutions Digitales & Logiciels Métiers
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Nos solutions digitales
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Nous développons et proposons des solutions logicielles pour simplifier les processus métiers, optimiser la performance et accompagner la transformation digitale des entreprises.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Empty State & Upcoming Solutions Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-14 shadow-lg relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center border border-blue-100">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>R&D & Déploiements en cours</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Nos solutions seront bientôt disponibles.
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Vous recherchez une solution ERP, CRM ou une application métier adaptée à votre organisation ? Parlons de vos besoins.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('/demande-devis?type=solution')}
                className="px-7 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Présenter mon besoin</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/services/consulting-it')}
                className="px-7 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Découvrir le développement sur-mesure
              </button>
            </div>
          </div>

          {/* Architecture Roadmap for upcoming solutions */}
          <div className="mt-16 pt-12 border-t border-slate-100">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Cadre Technologique & Familles Logicielles en Développement
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-base mb-2">Suites ERP & Gestion Métier</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatisation comptable, suivi des commandes, facturation marocaine conforme et gestion des stocks temps réel.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-blue-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Architecture modulaire</span>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-base mb-2">CRM B2B & Pipelines Commerciaux</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pilotage des opportunités, gestion des relances devis, historique des interactions et intégration WhatsApp/Email.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-blue-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Centralisation des leads</span>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="font-bold text-slate-900 text-base mb-2">Plateformes SaaS Métiers (Nexus)</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Écosystème vertical sécurisé pour la gestion des opérations, des flottes et des interventions d’équipes sur le terrain.
                </p>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-blue-600 font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Évolutivité Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
