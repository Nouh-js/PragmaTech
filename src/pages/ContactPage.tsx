import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Paperclip, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    requestType: 'Renseignements généraux',
    subject: '',
    message: '',
    consent: false,
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg('Le fichier ne doit pas dépasser 10 Mo.');
        return;
      }
      setAttachment(file);
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      setErrorMsg('Veuillez renseigner votre nom, email et votre message.');
      return;
    }
    if (!formData.consent) {
      setErrorMsg('Veuillez accepter le traitement des données pour continuer.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const payload = {
        type: 'contact',
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || formData.requestType,
        description: `[${formData.requestType}] ${formData.message}`,
        attachmentName: attachment ? attachment.name : undefined,
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Erreur lors de l’envoi de votre demande.');
      }

      setSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        requestType: 'Renseignements généraux',
        subject: '',
        message: '',
        consent: false,
      });
      setAttachment(null);
    } catch (err: any) {
      setErrorMsg(err.message || 'Une erreur est survenue lors de l’envoi.');
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
              Contact & Échanges
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
              Contactez PRAGMA TECHNOLOGIES
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Une question sur nos services, nos équipements ou un projet à étudier ? Nos équipes basées à Casablanca sont à votre entière disposition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info Cards & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Coordonnées de l'Entreprise</h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Siège & Couverture</div>
                    <div>{COMPANY_INFO.name}</div>
                    <div className="text-xs text-slate-500">Casablanca, Maroc (Interventions nationales)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">E-mail général</div>
                    <a href={`mailto:${COMPANY_INFO.generalEmail}`} className="text-blue-600 hover:underline">
                      {COMPANY_INFO.generalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Site internet</div>
                    <span className="text-slate-700">{COMPANY_INFO.website}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Commercial In-charge card */}
            <div className="bg-[#0A1628] text-white p-7 rounded-2xl border border-slate-800 shadow-md space-y-4">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Responsable d'Affaires Dédiée
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{COMPANY_INFO.commercialContact.name}</h3>
                <div className="text-xs text-slate-300">{COMPANY_INFO.commercialContact.role}</div>
              </div>

              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.commercialContact.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.commercialContact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.commercialContact.phone}`} className="hover:text-white transition-colors font-mono">
                    {COMPANY_INFO.commercialContact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                Disponibilité : Lundi au Vendredi, 08h30 - 18h30 (GMT+1)
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Envoyez-nous un message</h2>
              <p className="text-xs text-slate-500 mb-6">
                Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement.
              </p>

              {success ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-emerald-900">Demande transmise avec succès</h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto leading-relaxed">
                    Merci pour votre message. Salma El Mejjaty et l'équipe PRAGMA TECHNOLOGIES étudieront votre demande et reviendront vers vous sous 24h ouvrées.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-3 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nom et prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ex: Mohamed Alami"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Entreprise / Organisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Alami Solutions SARL"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        E-mail professionnel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.alami@entreprise.ma"
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
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 6 XX XX XX XX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Type de demande
                      </label>
                      <select
                        value={formData.requestType}
                        onChange={(e) => setFormData({ ...formData, requestType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden bg-white"
                      >
                        <option value="Renseignements généraux">Renseignements généraux</option>
                        <option value="Consulting IT & Développement">Consulting IT & Développement</option>
                        <option value="Design UX/UI">Design UX/UI</option>
                        <option value="Équipements & Matériel Pro">Équipements & Matériel Pro</option>
                        <option value="Partenariat Commercial">Partenariat Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Sujet
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Ex: Projet de refonte SI"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez votre besoin, vos objectifs ou vos interrogations..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-hidden resize-none"
                    />
                  </div>

                  {/* Attachment optional */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Pièce jointe (facultative - max 10 Mo)
                    </label>
                    <div className="flex items-center gap-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-medium text-slate-700 transition-colors">
                        <Paperclip className="w-3.5 h-3.5 text-slate-500" />
                        <span>{attachment ? attachment.name : 'Joindre un fichier (PDF, Word, Image)'}</span>
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
                          Supprimer
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-600 mt-0.5"
                      />
                      <span>
                        J'accepte que PRAGMA TECHNOLOGIES traite les données saisies dans le cadre de ma demande professionnelle conformément à la politique de confidentialité.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-lg bg-blue-600 text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-700 active:scale-98 transition-all shadow-md shadow-blue-600/20 inline-flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
