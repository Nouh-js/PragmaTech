import React from 'react';
import { X, FileDown, CheckCircle2, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { PragmaLogo } from './PragmaLogo';

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatalogModal: React.FC<CatalogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Catalog visual preview mockup */}
          <div className="w-full sm:w-48 shrink-0 bg-linear-to-b from-slate-900 to-[#0A1628] rounded-xl p-5 text-white shadow-lg border border-slate-800 flex flex-col justify-between aspect-3/4 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-8 h-1 bg-blue-500 rounded-full mb-4" />
              <PragmaLogo variant="light" size="sm" showSubtitle={false} />
              <div className="mt-4 text-xs font-semibold tracking-wider text-blue-400 uppercase">
                Édition 2026
              </div>
              <div className="text-sm font-bold text-white mt-1 leading-snug">
                Catalogue Solutions IT & Équipements
              </div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-3 space-y-1">
              <div>• Consulting & SaaS</div>
              <div>• Parc Informatique</div>
              <div>• Réseau & Sécurité</div>
              <div>• Mobilier Pro</div>
            </div>
          </div>

          {/* Details & Download action */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Documentation Officielle B2B
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Catalogue PRAGMA TECHNOLOGIES 2026
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Retrouvez l’ensemble de nos offres d'équipements informatiques, solutions d'impression, infrastructures réseau et mobilier de bureau adaptées au marché marocain.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Format PDF haute définition</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Garanties constructeurs</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Livraison sur tout le Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Support commercial dédié</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <a
                href={COMPANY_INFO.catalogPdfUrl}
                download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
                onClick={() => {
                  fetch('/api/catalog/download').catch(() => {});
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Télécharger le catalogue PDF</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-3 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
