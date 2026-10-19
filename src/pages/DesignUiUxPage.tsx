import React from 'react';
import { ArrowRight, CheckCircle2, Layout, Eye, Palette, MousePointerClick, FileText, Smartphone, Users, Sparkles } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/companyData';

interface DesignUiUxPageProps {
  onNavigate: (path: string) => void;
}

export const DesignUiUxPage: React.FC<DesignUiUxPageProps> = ({ onNavigate }) => {
  const serviceData = SERVICE_PILLARS.find((s) => s.slug === 'design-ux-ui')!;

  const designPillars = [
    { title: 'UX Research & Analyse des besoins', desc: 'Entretiens qualitatifs, observation sur le terrain et cartographie des douleurs utilisateurs.', icon: Users },
    { title: 'Audit UX & Ergonomie', desc: 'Évaluation heuristique basée sur les normes de Nielsen et détection des points de friction bloquants.', icon: Eye },
    { title: 'Architecture de l’Information', desc: 'Arborescences clarifiées, inventaire des contenus et organisation logique des flux métiers.', icon: Layout },
    { title: 'Conception des Parcours Utilisateurs', desc: 'User journey maps, storyboards opérationnels et réduction des étapes de validation.', icon: MousePointerClick },
    { title: 'Wireframing & Prototypage', desc: 'Maquettes filaires interactives cliquables pour valider l’expérience avant toute ligne de code.', icon: Smartphone },
    { title: 'Design d’Interfaces Web & Mobile (UI)', desc: 'Direction artistique moderne, typographies rigoureuses et contrastes conformes WCAG AA.', icon: Palette },
    { title: 'Création de Design Systems', desc: 'Bibliothèques de composants Figma et tokens standardisés assurant cohérence et scalabilité.', icon: Sparkles },
    { title: 'Tests Utilisateurs & Optimisation', desc: 'Protocoles de test guidés, analyses d’utilisabilité et itérations orientées performance.', icon: CheckCircle2 },
    { title: 'UX Writing', desc: 'Microcopie précise, messages d’aide explicites et tonalité engageante adaptée à votre marque.', icon: FileText },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-14 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
                <span>Pôle Expérience & Design Produit</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Des expériences digitales pensées pour vos utilisateurs
              </h1>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Nous transformons les processus complexes en interfaces simples, élégantes et immédiatement adoptées par vos collaborateurs et vos clients.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/demande-devis?service=Design%20UX/UI')}
                  className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Demander un accompagnement UX/UI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={serviceData.image}
                  alt="Design UX/UI PRAGMA TECHNOLOGIES"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 9 UX/UI Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Notre Gamme de Prestations UX/UI
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            L'excellence de la recherche au design système
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {designPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Visual UX/UI Process */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Processus de Conception
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Une démarche itérative centrée sur la valeur
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.methodology.map((m) => (
              <div key={m.step} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-2xl font-black text-blue-600 mb-2">{m.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Impact Métier
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pourquoi le design est un investissement stratégique ?
              </h3>
              <p className="text-sm text-slate-600">
                Un outil ergonomique réduit le temps d’apprentissage des collaborateurs, prévient les erreurs de saisie et valorise votre image de marque.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceData.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Vous souhaitez concevoir une nouvelle interface ou auditer votre plateforme ?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Échangez avec nos designers pour cadrer vos parcours et prototyper vos idées.
          </p>
          <button
            onClick={() => onNavigate('/demande-devis?service=Design%20UX/UI')}
            className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Demander un accompagnement UX/UI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
