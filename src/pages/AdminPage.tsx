import React, { useState, useEffect } from 'react';
import { LeadSubmission } from '../types';
import { Lock, LogOut, Download, Search, Filter, CheckCircle2, Clock, Trash2, Edit3, FileText, Package, Laptop, Cpu, MessageSquare, AlertCircle, RefreshCw, Eye } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData';
import { PragmaLogo } from '../components/PragmaLogo';

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);
  const [statusUpdate, setStatusUpdate] = useState<'nouveau' | 'en_cours' | 'traite' | 'archive'>('nouveau');
  const [notesUpdate, setNotesUpdate] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  // Active Admin View Tab
  const [adminTab, setAdminTab] = useState<'leads' | 'catalog' | 'settings'>('leads');

  useEffect(() => {
    const savedToken = sessionStorage.getItem('pragma_admin_token');
    if (savedToken) {
      setIsAuthenticated(true);
      fetchLeads();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('pragma_admin_token', data.token);
        setIsAuthenticated(true);
        fetchLeads();
      } else {
        setLoginError(data.error || 'Mot de passe incorrect.');
      }
    } catch (err) {
      setLoginError('Erreur de connexion au serveur.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('pragma_admin_token');
    setIsAuthenticated(false);
    setLeads([]);
  };

  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const queryParams = new URLSearchParams();
      if (filterType !== 'all') queryParams.append('type', filterType);
      if (filterStatus !== 'all') queryParams.append('status', filterStatus);
      if (searchQuery) queryParams.append('search', searchQuery);

      const res = await fetch(`/api/leads?${queryParams.toString()}`);
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [filterType, filterStatus, searchQuery, isAuthenticated]);

  const handleSelectLead = (lead: LeadSubmission) => {
    setSelectedLead(lead);
    setStatusUpdate(lead.status);
    setNotesUpdate(lead.notes || '');
  };

  const handleUpdateLead = async () => {
    if (!selectedLead) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/leads/${selectedLead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: statusUpdate, notes: notesUpdate }),
      });
      if (res.ok) {
        const data = await res.json();
        setLeads((prev) => prev.map((l) => (l.id === selectedLead.id ? data.lead : l)));
        setSelectedLead(data.lead);
      }
    } catch (err) {
      console.error('Failed to update lead:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Voulez-vous vraiment archiver ou supprimer cette demande ?')) return;
    try {
      const res = await fetch(`/api/leads/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  // If not authenticated, render login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-slate-900">Espace Administration</h1>
            <p className="text-xs text-slate-500">
              PRAGMA TECHNOLOGIES · Consultation et gestion des demandes
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Mot de passe d'accès
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mot de passe admin"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                Accès autorisé : <code className="text-slate-600 font-mono">pragma2026</code>
              </p>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors cursor-pointer"
            >
              {loginLoading ? 'Connexion en cours...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Dashboard Overview Counts
  const countNew = leads.filter((l) => l.status === 'nouveau').length;
  const countInProgress = leads.filter((l) => l.status === 'en_cours').length;
  const countCompleted = leads.filter((l) => l.status === 'traite').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
              Back-Office PRAGMA
            </span>
            <span className="text-xs text-slate-400">Session active</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mt-1">Gestion des Demandes B2B</h1>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/api/leads/export"
            download
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Exporter en CSV</span>
          </a>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 border border-red-200 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200">
        <button
          onClick={() => setAdminTab('leads')}
          className={`py-2 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
            adminTab === 'leads'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Toutes les Demandes ({leads.length})
        </button>
        <button
          onClick={() => setAdminTab('catalog')}
          className={`py-2 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
            adminTab === 'catalog'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Gestion du Catalogue PDF
        </button>
        <button
          onClick={() => setAdminTab('settings')}
          className={`py-2 px-4 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
            adminTab === 'settings'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Catégories & Solutions Futures
        </button>
      </div>

      {/* Tab: Leads Management */}
      {adminTab === 'leads' && (
        <div className="space-y-6">
          {/* KPI Summary strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
              <div className="text-xs text-blue-600 font-semibold uppercase">Nouvelles demandes</div>
              <div className="text-2xl font-bold text-blue-950 mt-1 tabular-nums">{countNew}</div>
              <div className="text-[11px] text-blue-600 mt-1">Nécessitent une prise en charge</div>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
              <div className="text-xs text-amber-600 font-semibold uppercase">En cours d'étude</div>
              <div className="text-2xl font-bold text-amber-950 mt-1 tabular-nums">{countInProgress}</div>
              <div className="text-[11px] text-amber-600 mt-1">Devis ou cadrage en préparation</div>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100">
              <div className="text-xs text-emerald-600 font-semibold uppercase">Traitées / Clôturées</div>
              <div className="text-2xl font-bold text-emerald-950 mt-1 tabular-nums">{countCompleted}</div>
              <div className="text-[11px] text-emerald-600 mt-1">Propositions envoyées</div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1 min-w-[280px]">
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher par nom, entreprise, email..."
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:ring-1 focus:ring-blue-600 outline-hidden"
                />
              </div>

              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white"
              >
                <option value="all">Tous les types</option>
                <option value="produits">Devis Produits</option>
                <option value="prestation">Prestation IT / UX</option>
                <option value="solution">Solution Digitale</option>
                <option value="contact">Contact Général</option>
              </select>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white"
              >
                <option value="all">Tous les statuts</option>
                <option value="nouveau">Nouveau</option>
                <option value="en_cours">En cours</option>
                <option value="traite">Traité</option>
                <option value="archive">Archivé</option>
              </select>
            </div>

            <button
              onClick={fetchLeads}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Rafraîchir"
            >
              <RefreshCw className={`w-4 h-4 ${loadingLeads ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Table and Detail split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Table */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold">
                    <tr>
                      <th className="p-3">Type</th>
                      <th className="p-3">Client / Entreprise</th>
                      <th className="p-3">Détails</th>
                      <th className="p-3">Statut</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-400">
                          Aucune demande ne correspond à vos critères de recherche.
                        </td>
                      </tr>
                    ) : (
                      leads.map((l) => (
                        <tr
                          key={l.id}
                          onClick={() => handleSelectLead(l)}
                          className={`hover:bg-blue-50/40 cursor-pointer transition-colors ${
                            selectedLead?.id === l.id ? 'bg-blue-50/70' : ''
                          }`}
                        >
                          <td className="p-3 whitespace-nowrap">
                            <span className="font-semibold text-slate-700">
                              {l.type === 'produits' && 'Produits'}
                              {l.type === 'prestation' && 'Prestation'}
                              {l.type === 'solution' && 'Solution'}
                              {l.type === 'contact' && 'Contact'}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="font-semibold text-slate-900">{l.company}</div>
                            <div className="text-[11px] text-slate-500">{l.fullName}</div>
                          </td>
                          <td className="p-3 max-w-[200px]">
                            <div className="truncate text-slate-700">
                              {l.category || l.service || l.solutionType || l.subject || 'Demande'}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">{l.description}</div>
                          </td>
                          <td className="p-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                l.status === 'nouveau'
                                  ? 'bg-blue-100 text-blue-700'
                                  : l.status === 'en_cours'
                                  ? 'bg-amber-100 text-amber-700'
                                  : l.status === 'traite'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {l.status}
                            </span>
                          </td>
                          <td className="p-3 text-right whitespace-nowrap">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteLead(l.id);
                              }}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                              title="Supprimer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Selected Lead Detailed Panel */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
              {selectedLead ? (
                <>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider">Détail du Dossier</span>
                      <h3 className="text-base font-bold text-slate-900">{selectedLead.company}</h3>
                    </div>
                    <span className="text-xs text-slate-400">
                      {new Date(selectedLead.createdAt).toLocaleDateString('fr-FR')}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-400 block mb-0.5">Contact Client</span>
                      <div className="font-semibold text-slate-900">{selectedLead.fullName}</div>
                      <div className="text-slate-600">{selectedLead.email} · {selectedLead.phone}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-slate-400 block mb-0.5">Type de demande</span>
                        <div className="font-medium text-slate-900 capitalize">{selectedLead.type}</div>
                      </div>
                      <div>
                        <span className="text-slate-400 block mb-0.5">Périmètre / Famille</span>
                        <div className="font-medium text-slate-900">
                          {selectedLead.category || selectedLead.service || selectedLead.solutionType || '-'}
                        </div>
                      </div>
                    </div>

                    {selectedLead.quantity && (
                      <div>
                        <span className="text-slate-400 block mb-0.5">Quantité estimée</span>
                        <div className="font-medium text-slate-900">{selectedLead.quantity}</div>
                      </div>
                    )}

                    {selectedLead.budget && (
                      <div>
                        <span className="text-slate-400 block mb-0.5">Budget indicatif</span>
                        <div className="font-medium text-slate-900">{selectedLead.budget}</div>
                      </div>
                    )}

                    <div>
                      <span className="text-slate-400 block mb-0.5">Description du besoin</span>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 whitespace-pre-wrap leading-relaxed">
                        {selectedLead.description}
                      </div>
                    </div>

                    {selectedLead.attachmentName && (
                      <div>
                        <span className="text-slate-400 block mb-0.5">Pièce jointe</span>
                        <div className="p-2 rounded bg-slate-100 text-blue-600 flex items-center gap-1.5 font-medium">
                          <FileText className="w-3.5 h-3.5" />
                          <span>{selectedLead.attachmentName}</span>
                        </div>
                      </div>
                    )}

                    {/* Status and Notes Update Form */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Modifier le statut
                        </label>
                        <select
                          value={statusUpdate}
                          onChange={(e: any) => setStatusUpdate(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white"
                        >
                          <option value="nouveau">Nouveau</option>
                          <option value="en_cours">En cours de traitement</option>
                          <option value="traite">Traité / Proposition transmise</option>
                          <option value="archive">Archivé</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                          Notes internes / Suivi commercial
                        </label>
                        <textarea
                          rows={3}
                          value={notesUpdate}
                          onChange={(e) => setNotesUpdate(e.target.value)}
                          placeholder="Ex: Salma a transmis la cotation le 19/10, relance prévue le 24/10..."
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs resize-none"
                        />
                      </div>

                      <button
                        onClick={handleUpdateLead}
                        disabled={actionLoading}
                        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors disabled:opacity-50 cursor-pointer"
                      >
                        {actionLoading ? 'Enregistrement...' : 'Mettre à jour le dossier'}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center text-slate-400 text-xs">
                  Sélectionnez une demande dans la liste pour voir l'ensemble de ses caractéristiques et ajouter des notes de suivi.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab: Catalog PDF Management */}
      {adminTab === 'catalog' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Catalogue Commercial B2B</h2>
              <p className="text-xs text-slate-500 mt-1">
                Gestion du document PDF officiel distribué sur le site pour les services achats et directions d'entreprises.
              </p>
            </div>
            <a
              href={COMPANY_INFO.catalogPdfUrl}
              download="Catalogue-PRAGMA-TECHNOLOGIES-2026.pdf"
              className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger la version active</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-semibold text-slate-900">État du fichier PDF :</div>
              <div className="flex items-center gap-2 text-emerald-600 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Fichier actif et déployé publiquement</span>
              </div>
              <div className="text-slate-500 pt-1">
                Emplacement : <code className="bg-slate-200 px-1 py-0.5 rounded">/public/catalogue-pragma-technologies.pdf</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-semibold text-slate-900">Statistiques de distribution :</div>
              <div className="text-slate-600">
                Le document est accessible depuis la page d'accueil, la page produits et le pied de page.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Categories & Solutions Settings */}
      {adminTab === 'settings' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Catégories d'Équipements Actives</h2>
            <p className="text-xs text-slate-500">
              Les 5 catégories présentées sur la page Produits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {PRODUCT_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-start gap-4">
                  <img src={cat.image} alt={cat.title} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{cat.title}</div>
                    <div className="text-slate-500 mt-1 line-clamp-2">{cat.shortDesc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
