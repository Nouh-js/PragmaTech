import React from 'react';
import { ArrowUpRight, FileDown, CheckCircle } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/companyData';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
  onOpenCatalog: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate, onOpenCatalog }) => {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Catalogue Professionnel
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Des équipements professionnels pour tous vos besoins
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Découvrez nos principales familles de produits et trouvez les équipements adaptés à votre activité.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => onNavigate('/demande-devis?type=produits')}
                className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Demander un devis</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.catalogPdfUrl}
                download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
                className="px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Télécharger le catalogue PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of the 5 Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden bg-slate-100 ${idx === 0 ? 'h-72 sm:h-80' : 'h-64'}`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                      Famille {idx + 1}
                    </div>
                    <h3 className="text-2xl font-bold mt-0.5">{cat.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cat.shortDesc}
                  </p>

                  {/* Preselected Quote Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/demande-devis?cat=${cat.id}`)}
                      className="w-full py-3 px-4 rounded-lg bg-slate-900 group-hover:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Demander un devis</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section Catalogue PDF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1628] rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase">
              <FileDown className="w-4 h-4" />
              <span>Édition Imprimable & Consultable</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Besoin du catalogue complet pour votre service achats ?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Consultez toutes les spécifications d'équipements, les modalités d'approvisionnement et les coordonnées commerciales dans notre catalogue officiel 2026.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href={COMPANY_INFO.catalogPdfUrl}
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="px-6 py-3.5 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-center inline-flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Télécharger notre catalogue</span>
            </a>
            <button
              onClick={onOpenCatalog}
              className="px-6 py-3.5 rounded-lg border border-slate-700 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Aperçu en ligne
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
