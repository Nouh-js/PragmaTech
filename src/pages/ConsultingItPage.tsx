import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Laptop, Code2, Server, Database, RefreshCw, BarChart3 } from 'lucide-react';
import { SERVICE_PILLARS } from '../data/companyData';

interface ConsultingItPageProps {
  onNavigate: (path: string) => void;
}

export const ConsultingItPage: React.FC<ConsultingItPageProps> = ({ onNavigate }) => {
  const serviceData = SERVICE_PILLARS.find((s) => s.slug === 'consulting-it')!;

  const capabilities = [
    { title: 'Conseil et accompagnement IT', desc: 'Audit des architectures, choix technologiques, gouvernance et roadmap d’évolution des SI.', icon: Laptop },
    { title: 'Développement d’applications web et mobiles', desc: 'Applications métier responsives, portails clients sécurisés et applications mobiles iOS / Android.', icon: Code2 },
    { title: 'Développement de solutions SaaS sur mesure', desc: 'Plateformes multi-tenants scalables, architectures microservices et abonnements récurrents.', icon: Server },
    { title: 'Conception & commercialisation de logiciels', desc: 'Développement de produits logiciels répondant aux besoins verticaux du marché marocain.', icon: Database },
    { title: 'Intégration de solutions ERP et CRM', desc: 'Paramétrage, interfaçage API et personnalisation des suites de gestion d’entreprise les plus performantes.', icon: BarChart3 },
    { title: 'Automatisation des processus métiers', desc: 'Élimination des doubles saisies, workflows d’approbation automatisés et connecteurs inter-systèmes.', icon: Zap },
    { title: 'Transformation digitale', desc: 'Accompagnement au changement, modernisation des outils historiques et culture produit agile.', icon: RefreshCw },
    { title: 'Maintenance et évolution des applications', desc: 'TMA (Tierce Maintenance Applicative), correctifs de sécurité et monitoring de performance 24/7.', icon: Shield },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-14 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
                <span>Pôle Conseil IT & Ingénierie Logicielle</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Des solutions technologiques adaptées à vos enjeux métiers
              </h1>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Nous concevons des logiciels robustes, automatisons vos flux opérationnels et vous guidons vers des architectures cloud résilientes et sécurisées.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/demande-devis?service=Consulting%20IT')}
                  className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Discuter de mon projet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={serviceData.image}
                  alt="Consulting IT PRAGMA TECHNOLOGIES"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Périmètre d'Intervention
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Nos domaines d'intervention IT & Digitaux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section Méthodologie */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Rigueur & Transparence
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Notre méthodologie de projet
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              De l’expression de besoin jusqu’au maintien en conditions opérationnelles, nous appliquons une démarche par jalons éprouvée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.methodology.map((m) => (
              <div key={m.step} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="text-2xl font-black text-blue-600 mb-3">{m.step}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Bénéfices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Bénéfices Concrets
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Pourquoi confier votre ingénierie à PRAGMA TECHNOLOGIES ?
              </h3>
              <p className="text-sm text-slate-600">
                Nos équipes allient pragmatisme opérationnel et exigences techniques de haut niveau pour sécuriser vos investissements IT.
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

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Vous avez un projet applicatif ou un besoin de conseil IT ?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Planifions un premier échange d’évaluation technique avec nos consultants basés au Maroc.
          </p>
          <button
            onClick={() => onNavigate('/demande-devis?service=Consulting%20IT')}
            className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Discuter de mon projet</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
