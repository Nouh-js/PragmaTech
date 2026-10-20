import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileDown, Layers, Laptop, ShieldCheck, Sparkles, Clock, Compass, Users2, Cpu } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, SERVICE_PILLARS } from '../data/companyData';
import { EquipmentsSection } from '../components/EquipmentsSection';
import { HeroSection } from '../components/HeroSection';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenCatalog: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCatalog }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* ========================================================
          SECTION 1 — HERO
          ======================================================== */}
      <HeroSection onNavigate={onNavigate} />

      {/* ========================================================
          SECTION 2 — NOS EXPERTISES
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Pôles d'Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Des expertises complémentaires pour accompagner votre croissance
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Nous combinons conseil stratégique, maîtrise technologique logicielle et approvisionnement en équipements pour répondre avec rigueur à l'ensemble de vos défis opérationnels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_PILLARS.map((service, idx) => (
            <div
              key={service.slug}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-md rounded-md text-xs font-medium text-white">
                  0{idx + 1}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-medium text-blue-600 mb-1">{service.kicker}</div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {service.points.slice(0, 4).map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-900 hover:text-blue-600 font-semibold text-xs transition-colors flex items-center justify-between group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <span>Découvrir le pôle</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 3 — NOS PRODUITS / FOURNITURES & ÉQUIPEMENTS PRO
          ======================================================== */}
      <EquipmentsSection onNavigate={onNavigate} onOpenCatalog={onOpenCatalog} />

      {/* ========================================================
          SECTION 4 — NOS SOLUTIONS DIGITALES
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-br from-[#071120] to-[#0D1F38] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ingénierie Logicielle & SaaS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Des solutions pensées pour vos enjeux métiers
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              PRAGMA TECHNOLOGIES conçoit et intègre des solutions ERP, CRM, plateformes SaaS modulaires et applications métiers sur-mesure. Notre objectif : fluidifier vos opérations, automatiser vos tâches critiques et moderniser votre système d'information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="font-bold text-white text-sm">ERP & Gestion Intégrée</div>
                <div className="text-xs text-slate-400 mt-1">Centralisation des flux financiers, achats & stocks.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="font-bold text-white text-sm">CRM & Relation Client</div>
                <div className="text-xs text-slate-400 mt-1">Pipelines de vente, ticketing & fidélisation B2B.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="font-bold text-white text-sm">Applications Métiers & SaaS</div>
                <div className="text-xs text-slate-400 mt-1">Portails sur-mesure pour vos processus spécifiques.</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/solutions')}
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Découvrir nos solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/demande-devis?type=solution')}
                className="px-6 py-3.5 rounded-lg bg-white/10 text-white border border-white/20 font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Présenter mon besoin
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5 — POURQUOI PRAGMA TECHNOLOGIES ?
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
            Notre Valeur Ajoutée
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pourquoi PRAGMA TECHNOLOGIES ?
          </h2>
          <p className="text-base text-slate-600 mt-3">
            Nous avons structuré notre offre pour offrir aux entreprises marocaines un partenaire unique, fiable et technologiquement exigeant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Une approche centrée sur les besoins métiers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nous refusons les technologies inutiles. Chaque solution est sélectionnée pour son impact direct sur votre rentabilité et l'efficacité de vos équipes.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Des expertises technologiques complémentaires
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              De l'audit de sécurité réseau jusqu'à l'interface utilisateur web et la livraison de stations fixes, nous couvrons la chaîne complète.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Un accompagnement personnalisé
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Un interlocuteur d'affaires dédié (Salma El Mejjaty) et des experts joignables pour vous guider avant, pendant et après chaque projet.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Des solutions concrètes et évolutives
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nous construisons sur des architectures pérennes et modulaires, permettant à vos outils et équipements de grandir au rythme de votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6 — NOTRE APPROCHE
          ======================================================== */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              Méthodologie Éprouvée
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Notre approche méthodique en 4 étapes
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Un parcours structuré garantissant le respect de vos délais, de vos budgets et de vos exigences de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 relative">
              <div className="text-3xl font-extrabold text-blue-400 mb-3 tabular-nums">01</div>
              <h3 className="text-base font-bold text-white mb-2">Comprendre vos besoins</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Immersion dans vos contraintes opérationnelles, inventaire des usages et définition précise du périmètre.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 relative">
              <div className="text-3xl font-extrabold text-blue-400 mb-3 tabular-nums">02</div>
              <h3 className="text-base font-bold text-white mb-2">Concevoir la bonne solution</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sélection des matériels optimaux ou conception d’architecture logicielle adaptée avec prototypage rapide.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 relative">
              <div className="text-3xl font-extrabold text-blue-400 mb-3 tabular-nums">03</div>
              <h3 className="text-base font-bold text-white mb-2">Déployer et réaliser</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Livraison, configuration sur site au Maroc, développement agile et recette rigoureuse en conditions réelles.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/80 relative">
              <div className="text-3xl font-extrabold text-blue-400 mb-3 tabular-nums">04</div>
              <h3 className="text-base font-bold text-white mb-2">Accompagner votre évolution</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Support technique réactif, réassort continu en fournitures et évolutions logicielles régulières.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7 — TÉLÉCHARGER NOTRE CATALOGUE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Cover Preview Card */}
          <div className="w-full sm:w-64 shrink-0 bg-[#0A1628] rounded-2xl p-6 text-white shadow-2xl border border-slate-800 aspect-3/4 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            <div>
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-4" />
              <div className="text-xs font-bold text-blue-400 tracking-wider uppercase">Édition Officielle 2026</div>
              <div className="text-base font-extrabold text-white mt-1">PRAGMA TECHNOLOGIES</div>
              <div className="text-xs text-slate-300 mt-2 font-medium">Catalogue Équipements & Solutions IT</div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-3">
              Disponible en téléchargement immédiat (PDF)
            </div>
          </div>

          {/* Description & Real Download Action */}
          <div className="flex-1 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wider uppercase">
              <FileDown className="w-4 h-4" />
              <span>Brochure Commerciale B2B</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Découvrez notre catalogue professionnel
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Retrouvez nos principales catégories d'équipements informatiques, de fournitures de bureau, de solutions réseau et de mobilier professionnel réunies dans une documentation pratique et détaillée.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY_INFO.catalogPdfUrl}
                download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 inline-flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                <span>Télécharger le catalogue PDF</span>
              </a>

              <button
                onClick={onOpenCatalog}
                className="px-5 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Feuilleter l'aperçu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 8 — CTA FINAL
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden border border-slate-800">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-balance">
              Un projet en tête ? Construisons la bonne solution ensemble.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
              Nos consultants IT et notre responsable commerciale vous répondent sous 24 à 48 heures ouvrées pour évaluer votre projet ou chiffrer vos équipements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-7 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                Parlons de votre projet
              </button>

              <button
                onClick={() => onNavigate('/demande-devis')}
                className="px-7 py-3.5 rounded-lg bg-white text-slate-900 font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
