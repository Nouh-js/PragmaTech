import React from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/companyData';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-3">
              Nos Pôles de Compétences
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Des services conçus pour répondre à vos ambitions.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              PRAGMA TECHNOLOGIES réunit l'ingénierie logicielle, la conception d'expériences utilisateurs et l'approvisionnement professionnel pour accompagner la transformation de votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Large Asymmetric Editorial Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICE_PILLARS.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Media Block */}
              <div
                className={`lg:col-span-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-md text-xs font-medium text-white">
                    Pôle 0{index + 1}
                  </div>
                </div>
              </div>

              {/* Text & Content Block */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {service.kicker}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Prestations clés incluses :
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {service.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate(`/demande-devis?service=${encodeURIComponent(service.title)}`)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Demander un devis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
