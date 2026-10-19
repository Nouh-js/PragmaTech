import React from 'react';
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Sparkles, Target, Users2, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICE_PILLARS } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-14 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <span>Entreprise & Identité Institutionnelle</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              PRAGMA TECHNOLOGIES, votre partenaire en technologie et solutions professionnelles.
            </h1>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Basée au Maroc, PRAGMA TECHNOLOGIES est une entreprise dédiée à l'accompagnement opérationnel des organisations à travers des expertises complémentaires en consulting IT, design d'interfaces et approvisionnement d'équipements professionnels.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Notre Mission</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-blue-600 font-semibold uppercase tracking-wider">
              Engagement Terrain & Utilité Concrète
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Notre Vision</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-blue-600 font-semibold uppercase tracking-wider">
              Partenariats Pérennes & Confiance B2B
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Principes Directeurs
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Nos valeurs fondamentales
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Ces cinq piliers guident chacune de nos interactions et garantissent l'intégrité de notre accompagnement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'Expertise & Approche */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              Notre Approche de Collaboration
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Un partenaire unique pour vos défis technologiques et logistiques
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Nous savons combien il peut être fastidieux pour une direction d'entreprise de coordonner de multiples prestataires pour le développement d'un logiciel, le design des interfaces et l'achat de serveurs ou de laptops.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              PRAGMA TECHNOLOGIES rassemble ces compétences sous une même enseigne avec un interlocuteur dédié, assurant ainsi une cohérence totale entre vos outils logiciels et vos équipements matériels.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3.5 rounded-lg bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {SERVICE_PILLARS.map((p) => (
              <div key={p.slug} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-blue-400 transition-colors">
                <div className="text-xs font-semibold text-blue-600">{p.kicker}</div>
                <div className="font-bold text-slate-900 text-base mt-0.5">{p.title}</div>
                <div className="text-xs text-slate-500 mt-1">{p.shortDesc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
