import React, { useState, useEffect } from 'react';
import { PragmaLogo } from './PragmaLogo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', path: '/' },
    {
      label: 'Nos services',
      path: '/services',
      hasDropdown: true,
      subItems: [
        { label: 'Consulting IT & Solutions digitales', path: '/services/consulting-it', desc: 'Développement, Cloud & Ingénierie logicielle' },
        { label: 'Design UX/UI', path: '/services/design-ux-ui', desc: 'Recherche, ergonomie & design systems' },
        { label: 'Fournitures & Équipements', path: '/services/fournitures-equipements', desc: 'Matériel, réseaux, impression & mobilier' },
      ],
    },
    { label: 'Nos produits', path: '/produits' },
    { label: 'Nos solutions', path: '/solutions' },
    { label: 'À propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3.5'
          : 'bg-white border-b border-slate-100 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus:outline-hidden group shrink-0"
            aria-label="PRAGMA TECHNOLOGIES Accueil"
          >
            <PragmaLogo size="md" variant="dark" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick(item.path)}
                      className={`inline-flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap shrink-0 hover:text-blue-600 ${
                        isActive ? 'text-blue-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 overflow-hidden">
                          {item.subItems?.map((sub) => (
                            <button
                              key={sub.path}
                              onClick={() => handleLinkClick(sub.path)}
                              className={`w-full text-left p-3 rounded-lg transition-colors group flex flex-col ${
                                currentPath === sub.path ? 'bg-blue-50/60' : 'hover:bg-slate-50'
                              }`}
                            >
                              <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                                {sub.label}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                              </span>
                              <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">{sub.desc}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`py-1 transition-colors whitespace-nowrap shrink-0 hover:text-blue-600 relative ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-slate-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleLinkClick('/demande-devis')}
              className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-slate-900 rounded-lg hover:bg-blue-600 active:scale-98 transition-all shadow-xs whitespace-nowrap shrink-0 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('/demande-devis')}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 rounded-md hover:bg-blue-600 whitespace-nowrap"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 shadow-2xl p-6 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-4">
            <button
              onClick={() => handleLinkClick('/')}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPath === '/' ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              Accueil
            </button>

            <div>
              <button
                onClick={() => handleLinkClick('/services')}
                className={`block w-full text-left py-2 text-base font-medium ${
                  currentPath.startsWith('/services') ? 'text-blue-600 font-bold' : 'text-slate-800'
                }`}
              >
                Nos services
              </button>
              <div className="pl-4 mt-2 space-y-2 border-l border-slate-200">
                <button
                  onClick={() => handleLinkClick('/services/consulting-it')}
                  className="block w-full text-left py-1 text-sm text-slate-600 hover:text-blue-600"
                >
                  Consulting IT & Solutions digitales
                </button>
                <button
                  onClick={() => handleLinkClick('/services/design-ux-ui')}
                  className="block w-full text-left py-1 text-sm text-slate-600 hover:text-blue-600"
                >
                  Design UX/UI
                </button>
                <button
                  onClick={() => handleLinkClick('/services/fournitures-equipements')}
                  className="block w-full text-left py-1 text-sm text-slate-600 hover:text-blue-600"
                >
                  Fournitures & Équipements
                </button>
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('/produits')}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPath === '/produits' ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              Nos produits
            </button>

            <button
              onClick={() => handleLinkClick('/solutions')}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPath === '/solutions' ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              Nos solutions
            </button>

            <button
              onClick={() => handleLinkClick('/a-propos')}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPath === '/a-propos' ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              À propos
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className={`block w-full text-left py-2 text-base font-medium ${
                currentPath === '/contact' ? 'text-blue-600 font-bold' : 'text-slate-800'
              }`}
            >
              Contact
            </button>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handleLinkClick('/demande-devis')}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Demander un devis
              </button>
              <a
                href="/catalogue-pragma-technologies.pdf"
                download="Catalogue-PRAGMA-TECHNOLOGIES.pdf"
                className="block w-full py-2.5 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Télécharger le catalogue PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
