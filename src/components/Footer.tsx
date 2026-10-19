import React from 'react';
import { PragmaLogo } from './PragmaLogo';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData';
import { FileDown, Mail, Phone, MapPin, ArrowUpRight, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071120] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-6">
            <PragmaLogo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              PRAGMA TECHNOLOGIES accompagne les entreprises au Maroc dans leurs projets digitaux, leur transformation technologique et l'approvisionnement en équipements professionnels.
            </p>
            
            {/* Commercial contact card */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5 max-w-md">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Contact d'Affaires Dédié
              </div>
              <div className="text-sm font-medium text-white">
                {COMPANY_INFO.commercialContact.name}
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-slate-400">
                <a
                  href={`mailto:${COMPANY_INFO.commercialContact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{COMPANY_INFO.commercialContact.email}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.commercialContact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{COMPANY_INFO.commercialContact.phoneDisplay}</span>
                </a>
                <div className="inline-flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{COMPANY_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Nos Pôles de Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('/services/consulting-it')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Consulting IT & Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/design-ux-ui')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Design UX/UI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services/fournitures-equipements')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Fournitures & Équipements
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => handleNav('/services')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Vue d'ensemble des services</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Categories Produits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Équipements Professionnels
            </h4>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleNav(`/produits?cat=${cat.id}`)}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => handleNav('/produits')}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1"
                >
                  <span>Toutes les catégories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Navigation & Catalogue */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Ressources B2B
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <button
                  onClick={() => handleNav('/solutions')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Nos solutions futures
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/a-propos')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  À propos de PRAGMA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Nous contacter
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/demande-devis')}
                  className="hover:text-blue-400 transition-colors text-left font-medium text-white"
                >
                  Demande de cotation / Devis
                </button>
              </li>
            </ul>

            {/* Catalog Download CTA in Footer */}
            <a
              href="/catalogue-pragma-technologies.pdf"
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all w-full justify-center group"
            >
              <FileDown className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
              <span>Catalogue PDF 2026</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} PRAGMA TECHNOLOGIES SARL. Tous droits réservés. Casablanca, Maroc.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">www.pragmatechnologies.ma</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => handleNav('/admin')}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
              title="Portail Administration"
            >
              <Lock className="w-3 h-3 text-slate-500" />
              <span>Espace Admin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
