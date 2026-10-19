import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CatalogModal } from './components/CatalogModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ConsultingItPage } from './pages/ConsultingItPage';
import { DesignUiUxPage } from './pages/DesignUiUxPage';
import { FournituresEquipementsPage } from './pages/FournituresEquipementsPage';
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  // Sync state with browser History API
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Helper to extract query parameters
  const getSearchParams = () => {
    return new URLSearchParams(window.location.search);
  };

  // Render the current view according to the path
  const renderContent = () => {
    // Strip query parameters for matching
    const basePath = currentPath.split('?')[0];
    const searchParams = getSearchParams();

    switch (basePath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenCatalog={() => setCatalogModalOpen(true)}
          />
        );

      case '/services':
        return <ServicesPage onNavigate={navigateTo} />;

      case '/services/consulting-it':
        return <ConsultingItPage onNavigate={navigateTo} />;

      case '/services/design-ux-ui':
        return <DesignUiUxPage onNavigate={navigateTo} />;

      case '/services/fournitures-equipements':
        return <FournituresEquipementsPage onNavigate={navigateTo} />;

      case '/produits':
        return (
          <ProductsPage
            onNavigate={navigateTo}
            onOpenCatalog={() => setCatalogModalOpen(true)}
          />
        );

      case '/solutions':
        return <SolutionsPage onNavigate={navigateTo} />;

      case '/a-propos':
        return <AboutPage onNavigate={navigateTo} />;

      case '/contact':
        return <ContactPage />;

      case '/demande-devis': {
        const cat = searchParams.get('cat') || undefined;
        const srv = searchParams.get('service') || undefined;
        const type = (searchParams.get('type') as any) || (cat ? 'produits' : srv ? 'prestation' : 'produits');
        return (
          <QuotePage
            initialType={type}
            initialCategory={cat}
            initialService={srv}
          />
        );
      }

      case '/admin':
        return <AdminPage />;

      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenCatalog={() => setCatalogModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Sticky Minimalist Corporate Header */}
      <Header currentPath={currentPath.split('?')[0]} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Dark Corporate Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Catalog Download & Preview Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
      />
    </div>
  );
}
