import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

// Support JSON body up to 15mb (for attachments)
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

// Ensure data folder and file exist
const DATA_DIR = path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

interface LeadItem {
  id: string;
  createdAt: string;
  type: 'produits' | 'prestation' | 'solution' | 'contact';
  fullName: string;
  company: string;
  email: string;
  phone: string;
  category?: string;
  service?: string;
  solutionType?: string;
  description: string;
  quantity?: string;
  budget?: string;
  timeline?: string;
  userCount?: string;
  subject?: string;
  attachmentName?: string;
  status: 'nouveau' | 'en_cours' | 'traite' | 'archive';
  notes?: string;
}

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(LEADS_FILE)) {
  const initialLeads: LeadItem[] = [
    {
      id: 'lead_1',
      createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
      type: 'produits',
      fullName: 'Karim Bennani',
      company: 'Fintech Atlas Casablanca',
      email: 'k.bennani@atlasfintech.ma',
      phone: '+212 6 61 23 45 67',
      category: 'materiel-informatique',
      description: 'Renouvellement du parc informatique pour nos développeurs : 15 laptops 32GB RAM et 15 écrans 27 pouces 4K.',
      quantity: '15 postes complets',
      status: 'en_cours',
      notes: 'Premier contact téléphonique établi. Proposition commerciale envoyée par Salma El Mejjaty.',
    },
    {
      id: 'lead_2',
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
      type: 'prestation',
      fullName: 'Nadia Mansouri',
      company: 'Logistique Maroc Express',
      email: 'n.mansouri@marocexpress.ma',
      phone: '+212 6 72 88 99 00',
      service: 'Consulting IT & Solutions digitales',
      description: 'Projet d’audit UX et refonte complète de notre portail de suivi des expéditions B2B avec intégration API ERP.',
      budget: '150 000 - 300 000 MAD',
      timeline: 'T2 2026',
      status: 'nouveau',
    },
    {
      id: 'lead_3',
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      type: 'solution',
      fullName: 'Youssef Chraibi',
      company: 'Cabinet Médical Al Amal',
      email: 'contact@alamal-clinique.ma',
      phone: '+212 5 22 45 67 89',
      solutionType: 'ERP',
      description: 'Recherche d’une solution de gestion des plannings, facturation et dossiers patients sécurisée.',
      userCount: '25 à 50 utilisateurs',
      status: 'nouveau',
    },
  ];
  fs.writeFileSync(LEADS_FILE, JSON.stringify(initialLeads, null, 2), 'utf8');
}

function getLeads(): LeadItem[] {
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads:', err);
    return [];
  }
}

function saveLeads(leads: LeadItem[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving leads:', err);
  }
}

// --- API Endpoints ---

// Submit a new lead / quote request
app.post('/api/leads', (req: Request, res: Response) => {
  try {
    const {
      type,
      fullName,
      company,
      email,
      phone,
      category,
      service,
      solutionType,
      description,
      quantity,
      budget,
      timeline,
      userCount,
      subject,
      attachmentName,
    } = req.body;

    if (!fullName || !company || !email || !phone) {
      return res.status(400).json({ error: 'Champs obligatoires manquants.' });
    }

    const newLead: LeadItem = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      type: type || 'produits',
      fullName,
      company,
      email,
      phone,
      category,
      service,
      solutionType,
      description: description || '',
      quantity,
      budget,
      timeline,
      userCount,
      subject,
      attachmentName,
      status: 'nouveau',
    };

    const currentLeads = getLeads();
    currentLeads.unshift(newLead);
    saveLeads(currentLeads);

    console.log(`[PRAGMA API] Nouvelle demande reçue : ${newLead.type} de ${newLead.company}`);
    return res.status(201).json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Une erreur interne est survenue.' });
  }
});

// Admin Authentication
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { password } = req.body;
  if (password === 'pragma2026' || password === 'admin') {
    return res.json({ success: true, token: 'pragma_admin_session_auth_token_2026' });
  }
  return res.status(401).json({ error: 'Mot de passe administrateur incorrect.' });
});

// Get leads (Admin)
app.get('/api/leads', (req: Request, res: Response) => {
  const leads = getLeads();
  const { type, status, search } = req.query;

  let filtered = [...leads];
  if (type && type !== 'all') {
    filtered = filtered.filter((l) => l.type === type);
  }
  if (status && status !== 'all') {
    filtered = filtered.filter((l) => l.status === status);
  }
  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.fullName.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        l.description.toLowerCase().includes(q)
    );
  }

  res.json({ leads: filtered, total: leads.length });
});

// Update lead status/notes
app.patch('/api/leads/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const leads = getLeads();
  const idx = leads.findIndex((l) => l.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: 'Demande non trouvée.' });
  }

  if (status) leads[idx].status = status;
  if (notes !== undefined) leads[idx].notes = notes;

  saveLeads(leads);
  res.json({ success: true, lead: leads[idx] });
});

// Delete lead
app.delete('/api/leads/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  let leads = getLeads();
  leads = leads.filter((l) => l.id !== id);
  saveLeads(leads);
  res.json({ success: true });
});

// Export leads as CSV
app.get('/api/leads/export', (req: Request, res: Response) => {
  const leads = getLeads();
  const header = ['ID', 'Date', 'Type', 'Nom & Prénom', 'Entreprise', 'Email', 'Téléphone', 'Catégorie/Service', 'Description', 'Statut', 'Notes'];
  
  const escapeCsv = (str: string | undefined) => {
    if (!str) return '""';
    return `"${str.replace(/"/g, '""').replace(/\n/g, ' ')}"`;
  };

  const rows = leads.map((l) => [
    escapeCsv(l.id),
    escapeCsv(new Date(l.createdAt).toLocaleDateString('fr-FR')),
    escapeCsv(l.type),
    escapeCsv(l.fullName),
    escapeCsv(l.company),
    escapeCsv(l.email),
    escapeCsv(l.phone),
    escapeCsv(l.category || l.service || l.solutionType || '-'),
    escapeCsv(l.description),
    escapeCsv(l.status),
    escapeCsv(l.notes || ''),
  ]);

  const csvContent = '\uFEFF' + [header.join(';'), ...rows.map((r) => r.join(';'))].join('\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="Demandes_PRAGMA_TECHNOLOGIES.csv"');
  res.send(csvContent);
});

// General contact API
app.post('/api/contact', (req: Request, res: Response) => {
  const { fullName, company, email, phone, requestType, subject, message } = req.body;
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Veuillez remplir les champs obligatoires.' });
  }

  const currentLeads = getLeads();
  const newContact: LeadItem = {
    id: `contact_${Date.now()}`,
    createdAt: new Date().toISOString(),
    type: 'contact',
    fullName,
    company: company || 'Non renseignée',
    email,
    phone: phone || '',
    subject: subject || 'Prise de contact générale',
    description: message,
    status: 'nouveau',
  };

  currentLeads.unshift(newContact);
  saveLeads(currentLeads);

  res.json({ success: true, message: 'Votre message a été transmis avec succès.' });
});

// Catalog download tracker
app.get('/api/catalog/download', (req: Request, res: Response) => {
  console.log('[PRAGMA ANALYTICS] Téléchargement du catalogue commercial');
  const pdfPath = path.join(__dirname, 'public', 'catalogue-pragma-technologies.pdf');
  if (fs.existsSync(pdfPath)) {
    res.download(pdfPath, 'Catalogue_PRAGMA_TECHNOLOGIES_2026.pdf');
  } else {
    res.status(404).send('Catalogue PDF non trouvé.');
  }
});

// Setup Vite or static serving
async function startServer() {
  if (!isProd) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`PRAGMA TECHNOLOGIES Server is running on http://localhost:${PORT}`);
  });
}

startServer();
