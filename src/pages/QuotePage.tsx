import React, { useState, useEffect } from 'react';
import { PRODUCT_CATEGORIES, SERVICE_PILLARS, COMPANY_INFO } from '../data/companyData';
import { Package, Laptop, Cpu, CheckCircle2, AlertCircle, Paperclip, Send, Loader2, ArrowRight } from 'lucide-react';
import { RequestType } from '../types';

interface QuotePageProps {
  initialType?: RequestType;
  initialCategory?: string;
  initialService?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  initialType = 'produits',
  initialCategory,
  initialService,
}) => {
  const [activeTab, setActiveTab] = useState<RequestType>(initialType);

  // Common contact fields
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Tab A: Devis Produits
  const [category, setCategory] = useState(initialCategory || 'materiel-informatique');
  const [productDesc, setProductDesc] = useState('');
  const [quantity, setQuantity] = useState('');

  // Tab B: Demande de Prestation
  const [service, setService] = useState(initialService || 'Consulting IT & Solutions digitales');
  const [projectDesc, setProjectDesc] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');

  // Tab C: Demande de Solution Digitale
  const [solutionType, setSolutionType] = useState('ERP & Gestion d’entreprise');
  const [solutionDesc, setSolutionDesc] = useState('');
  const [userCount, setUserCount] = useState('');
  const [solutionDeadline, setSolutionDeadline] = useState('');

  // Attachment & Feedback state
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
      setActiveTab('produits');
    }
    if (initialService) {
      setService(initialService);
      setActiveTab('prestation');
    }
    if (initialType) {
      setActiveTab(initialType);
    }
  }, [initialCategory, initialService, initialType]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('La taille du fichier doit être inférieure à 10 Mo.');
        return;
      }
      setAttachment(file);
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !company || !email || !phone) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires (Nom, Entreprise, Email, Téléphone).');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    let payload: any = {
      type: activeTab,
      fullName,
      company,
      email,
      phone,
      attachmentName: attachment ? attachment.name : undefined,
    };

    if (activeTab === 'produits') {
      if (!productDesc) {
        setErrorMsg('Veuillez décrire les équipements ou fournitures recherchés.');
        setLoading(false);
        return;
      }
      payload = {
        ...payload,
        category,
        description: productDesc,
        quantity: quantity || undefined,
      };
    } else if (activeTab === 'prestation') {
      if (!projectDesc) {
        setErrorMsg('Veuillez décrire votre projet ou besoin de prestation.');
        setLoading(false);
        return;
      }
      payload = {
        ...payload,
        service,
        description: projectDesc,
        budget: budget || undefined,
        timeline: timeline || undefined,
      };
    } else if (activeTab === 'solution') {
      if (!solutionDesc) {
        setErrorMsg('Veuillez décrire les fonctionnalités et processus visés par la solution.');
        setLoading(false);
        return;
      }
      payload = {
        ...payload,
        solutionType,
        description: solutionDesc,
        userCount: userCount || undefined,
        timeline: solutionDeadline || undefined,
      };
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Une erreur est survenue lors de l’enregistrement de votre demande.');
      }

      setSuccess(true);
      setProductDesc('');
      setProjectDesc('');
      setSolutionDesc('');
      setQuantity('');
      setBudget('');
      setTimeline('');
      setUserCount('');
      setAttachment(null);
    } catch (err: any) {
      setErrorMsg(err.message || 'Échec de connexion au serveur.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-slate-50/80 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-blue-600 tracking-wider uppercase mb-2">
              Cotation & Évaluation B2B
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Demande de devis & de prestations
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Sélectionnez la nature de votre demande ci-dessous. Notre responsable commerciale Salma El Mejjaty s'engage à vous transmettre une proposition chiffrée sous 24h à 48h ouvrées.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Functional Tabs */}
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50/70 p-1.5 gap-1.5">
            <button
              type="button"
              onClick={() => {
                setActiveTab('produits');
                setSuccess(false);
                setErrorMsg('');
              }}
              className={`py-3 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'produits'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Package className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">A. Devis</span>
              <span>Produits</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('prestation');
                setSuccess(false);
                setErrorMsg('');
              }}
              className={`py-3 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'prestation'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Laptop className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">B. Prestation</span>
              <span>IT / UX</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('solution');
                setSuccess(false);
                setErrorMsg('');
              }}
              className={`py-3 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              <Cpu className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">C. Solution</span>
              <span>Digitale</span>
            </button>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-10">
            {success ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">Demande enregistrée avec succès</h3>
                <p className="text-xs text-emerald-800 max-w-lg mx-auto leading-relaxed">
                  Votre dossier a été transmis directement au pôle commercial de PRAGMA TECHNOLOGIES. Nous étudions votre besoin et vous contacterons sous 24h à 48h ouvrées.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-5 py-2.5 text-xs font-semibold text-emerald-900 bg-emerald-200/80 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Faire une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Shared Contact Info */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                    1. Vos Coordonnées Professionnelles
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nom et prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ex: Salma Benkirane"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Entreprise / Raison sociale <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ex: Atlas Logistique SARL"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        E-mail professionnel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="s.benkirane@atlas.ma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+212 6 XX XX XX XX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>
                  </div>
                </div>

                {/* Specific Fields by Tab */}
                {activeTab === 'produits' && (
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      2. Détails des Équipements Recherchés
                    </h3>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Catégorie de produits
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden bg-white"
                      >
                        {PRODUCT_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Description des produits et spécifications recherchées <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={productDesc}
                          onChange={(e) => setProductDesc(e.target.value)}
                          placeholder="Ex: 10 PC portables i7 16GB pour équipe finance, 2 imprimantes réseau A4 multifonction..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Quantité approximative (facultatif)
                        </label>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="Ex: 10 unités / 1 parc complet"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'prestation' && (
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      2. Périmètre du Projet IT / Design
                    </h3>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Pôle de service
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden bg-white"
                      >
                        <option value="Consulting IT & Solutions digitales">Consulting IT & Solutions digitales</option>
                        <option value="Développement web et mobile">Développement web et mobile</option>
                        <option value="Développement de solutions SaaS sur mesure">Solutions SaaS sur mesure</option>
                        <option value="Intégration ERP et CRM">Intégration ERP & CRM</option>
                        <option value="Design UX/UI & Audit ergonomique">Design UX/UI & Audit ergonomique</option>
                        <option value="Transformation digitale & Automatisation">Transformation digitale & Automatisation</option>
                        <option value="Maintenance applicative (TMA)">Maintenance applicative (TMA)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Description du projet et objectifs métiers <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={projectDesc}
                        onChange={(e) => setProjectDesc(e.target.value)}
                        placeholder="Ex: Refonte complète de notre extranet client et connexion avec notre base ERP..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Budget indicatif (facultatif)
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden bg-white"
                        >
                          <option value="">Non défini</option>
                          <option value="< 50 000 MAD">&lt; 50 000 MAD</option>
                          <option value="50 000 - 150 000 MAD">50 000 - 150 000 MAD</option>
                          <option value="150 000 - 300 000 MAD">150 000 - 300 000 MAD</option>
                          <option value="> 300 000 MAD">&gt; 300 000 MAD</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Délai souhaité (facultatif)
                        </label>
                        <input
                          type="text"
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          placeholder="Ex: Démarrage sous 1 mois / T3 2026"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'solution' && (
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      2. Expression de Besoin pour Solution Logicielle
                    </h3>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Type de solution envisagée
                      </label>
                      <select
                        value={solutionType}
                        onChange={(e) => setSolutionType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden bg-white"
                      >
                        <option value="ERP & Gestion d’entreprise">ERP & Gestion d’entreprise</option>
                        <option value="CRM & Gestion Commerciale">CRM & Gestion Commerciale</option>
                        <option value="Plateforme SaaS Métier">Plateforme SaaS Métier</option>
                        <option value="Application Métier Spécifique">Application Métier Spécifique</option>
                        <option value="Autre solution logicielle">Autre solution logicielle</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Description des besoins et fonctionnalités attendues <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={solutionDesc}
                        onChange={(e) => setSolutionDesc(e.target.value)}
                        placeholder="Ex: Gestion des tournées logistiques, bons de livraison dématérialisés..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Nombre d'utilisateurs estimé (facultatif)
                        </label>
                        <input
                          type="text"
                          value={userCount}
                          onChange={(e) => setUserCount(e.target.value)}
                          placeholder="Ex: 10 à 25 utilisateurs"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Échéance de mise en service (facultatif)
                        </label>
                        <input
                          type="text"
                          value={solutionDeadline}
                          onChange={(e) => setSolutionDeadline(e.target.value)}
                          placeholder="Ex: Dans les 6 prochains mois"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Optional Attachment */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Cahier des charges ou liste de matériel (facultatif - max 10 Mo)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors">
                      <Paperclip className="w-3.5 h-3.5 text-slate-500" />
                      <span>{attachment ? attachment.name : 'Joindre un fichier (PDF, Excel, Word)'}</span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                      />
                    </label>
                    {attachment && (
                      <button
                        type="button"
                        onClick={() => setAttachment(null)}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Retirer
                      </button>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 active:scale-98 transition-all shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande de cotation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
