import React from 'react';
import { ArrowRight, CheckCircle2, ArrowUpRight, Truck, ShieldCheck, Wrench, PackageCheck, Headphones, RefreshCw } from 'lucide-react';
import { PRODUCT_CATEGORIES, SERVICE_PILLARS } from '../data/companyData';

interface FournituresEquipementsPageProps {
  onNavigate: (path: string) => void;
}

export const FournituresEquipementsPage: React.FC<FournituresEquipementsPageProps> = ({ onNavigate }) => {
  const serviceData = SERVICE_PILLARS.find((s) => s.slug === 'fournitures-equipements')!;

  const supplyServices = [
    { title: 'Audit & Sizing de Parc', desc: 'Évaluation technique des postes existants et recommandation des configurations optimales.', icon: PackageCheck },
    { title: 'Livraison Sécurisée sur site', desc: 'Acheminement rapide et sécurisé dans toutes les régions et zones industrielles du Maroc.', icon: Truck },
    { title: 'Installation & Intégration', desc: 'Mise en service, configuration réseau, paramétrage des postes et test opérationnel.', icon: Wrench },
    { title: 'Garanties Constructeurs Pro', desc: 'Matériels neufs sous garantie directe avec assistance en cas d’avarie.', icon: ShieldCheck },
    { title: 'Support & SAV Dédié', desc: 'Interlocuteur local joignable pour vos demandes d’assistance et dépannages.', icon: Headphones },
    { title: 'Gestion de Réassort Programmée', desc: 'Livraison automatisée de vos consommables d’impression et fournitures administratives.', icon: RefreshCw },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-14 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
                <span>Pôle Fourniture & Équipements Professionnels</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Les équipements adaptés à votre environnement professionnel
              </h1>
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
                Du poste de travail individuel jusqu'à l'infrastructure réseau et l'aménagement complet de vos bureaux, nous fournissons du matériel certifié aux entreprises partout au Maroc.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/produits')}
                  className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <span>Consulter nos catégories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/demande-devis?type=produits')}
                  className="px-6 py-3.5 rounded-lg bg-white/10 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
                >
                  <span>Demander un devis</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={serviceData.image}
                  alt="Équipements PRAGMA TECHNOLOGIES"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Associés à la Fourniture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Accompagnement Clé en Main
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Les services associés à notre offre d'équipements
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            La fourniture de matériel s’accompagne d’une prise en charge logistique et technique complète pour votre sérénité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplyServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Les Familles de Produits */}
      <section className="bg-slate-50/80 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Familles de Produits
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Cinq grandes catégories d'équipements professionnelles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div key={cat.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider">
                      Famille 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold">{cat.title}</h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{cat.shortDesc}</p>
                    
                    <div className="space-y-1.5 border-t border-slate-100 pt-3">
                      <div className="text-[11px] font-bold text-slate-900 uppercase">Spécifications clés :</div>
                      {cat.features.slice(0, 3).map((feat, eIdx) => (
                        <div key={eIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100">
                    <button
                      onClick={() => onNavigate(`/demande-devis?cat=${cat.id}`)}
                      className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Demander un devis ({cat.title})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Besoin d’équiper vos équipes ou d'aménager vos nouveaux locaux ?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Contactez notre responsable d'affaires Salma El Mejjaty pour recevoir une cotation personnalisée sous 24h à 48h.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/demande-devis?type=produits')}
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/catalogue-pragma-technologies.pdf"
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="px-6 py-3.5 rounded-lg bg-white/10 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              Télécharger le catalogue PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
