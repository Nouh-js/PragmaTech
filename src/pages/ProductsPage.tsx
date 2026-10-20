import React from 'react';
import { ArrowUpRight, FileDown, ShieldCheck, Truck, Clock } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/companyData';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenCatalog: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenCatalog }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-24">
      {/* ========================================================
          HERO — SIMPLE, MODERNE & CORPORATE
          ======================================================== */}
      <section className="pt-16 pb-12 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
              Équipements & Fournitures Professionnelles
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Des équipements professionnels pour tous vos besoins
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Découvrez nos principales familles de produits et trouvez les équipements adaptés à votre activité.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('/demande-devis?type=produits')}
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 active:scale-98 transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.catalogPdfUrl}
                download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
                className="px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 active:scale-98 transition-colors shadow-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Télécharger le catalogue PDF</span>
              </a>
            </div>

            {/* Reassurance points */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Matériel garanti constructeur</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Déploiement national au Maroc</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Devis transmis sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          LES 5 CATÉGORIES — GRILLE CORPORATE MODERNE ET CLAIRE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Category Image */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-md text-[11px] font-semibold text-white">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {cat.shortDesc}
                  </p>
                </div>

                {/* Direct Quote Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`/demande-devis?cat=${cat.id}`)}
                    className="w-full py-3 px-4 rounded-lg bg-slate-900 group-hover:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Demander un devis</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION CATALOGUE PDF — BANDEAU CORPORATE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1628] rounded-2xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <FileDown className="w-4 h-4" />
              <span>Catalogue Professionnel 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Découvrez notre catalogue professionnel
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Retrouvez nos principales catégories d'équipements informatiques, de fournitures de bureau, de solutions réseau et de mobilier professionnel réunies dans un document clair pour vos services achats.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href={COMPANY_INFO.catalogPdfUrl}
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Télécharger notre catalogue</span>
            </a>

            <button
              onClick={onOpenCatalog}
              className="w-full sm:w-auto px-5 py-3.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer"
            >
              Feuilleter l'aperçu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
