import { ProductCategoryInfo } from '../types';
import materielITImage from '../assets/images/equipements_materiel_it_1792405292123.jpg';
import impressionImage from '../assets/images/equipements_impression_1792405419919.jpg';
import fournituresBureauImage from '../assets/images/equipements_fournitures_bureau_1792405419255.jpg';
import reseauDatacenterImage from '../assets/images/equipements_reseau_datacenter_1792405293112.jpg';
import mobilierBureauImage from '../assets/images/equipements_mobilier_bureau_1792405419818.jpg';
import consultingITImage from '../assets/images/service_consulting_it_1792405291610.jpg';
import designUIUXImage from '../assets/images/service_design_uiux_1792405292042.jpg';

export const COMPANY_INFO = {
  name: 'PRAGMA TECHNOLOGIES',
  legalName: 'PRAGMA TECHNOLOGIES SARL',
  website: 'www.pragmatechnologies.ma',
  generalEmail: 'contact@pragmatechnologies.ma',
  commercialContact: {
    name: 'Salma El Mejjaty',
    role: "Responsable d'affaires",
    email: 'salma.elmejjaty@pragmatechnologies.ma',
    phone: '+212 6 49 59 63 83',
    phoneDisplay: '+212 6 49 59 63 83',
  },
  location: 'Casablanca, Maroc',
  catalogPdfUrl: '/catalogue-pragma-technologies.pdf',
  mission: 'Accompagner les entreprises avec des technologies, des services et des équipements adaptés à leurs besoins métiers.',
  vision: 'Construire des relations durables en proposant des solutions utiles, fiables et évolutives.',
  values: [
    { title: 'Pragmatisme', desc: 'Des réponses concrètes, mesurables et adaptées aux réalités de votre entreprise.' },
    { title: 'Engagement', desc: 'Un sens rigoureux du résultat et le respect strict de nos engagements opérationnels.' },
    { title: 'Proximité', desc: 'Une écoute attentive et une disponibilité constante de nos équipes locales.' },
    { title: 'Qualité', desc: 'Des standards d’ingénierie et de matériels professionnels irréprochables.' },
    { title: 'Innovation', desc: 'L’intégration des meilleures pratiques technologiques au service de votre croissance.' },
  ],
};

export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  {
    id: 'materiel-informatique',
    title: 'Matériel informatique',
    shortDesc: 'Ordinateurs portables, postes fixes, écrans, périphériques et accessoires informatiques adaptés aux besoins des professionnels.',
    fullDesc: 'Équipez vos collaborateurs avec du matériel informatique performant, robuste et garanti constructeur. Nous sélectionnons des configurations adaptées aux profils bureautiques, techniques et créatifs.',
    image: materielITImage,
    features: ['Garantie constructeur pro', 'Configuration sur-mesure', 'Postes fixes & stations mobiles', 'Périphériques & stations d’accueil'],
    equipmentExamples: ['Laptops d’entreprise (Dell, HP, Lenovo)', 'Moniteurs 24" à 34" calibrés', 'Stations de travail DAO/CAO', 'Accessoires & connectique pro'],
  },
  {
    id: 'impression-consommables',
    title: 'Impression & Consommables',
    shortDesc: 'Imprimantes, scanners, solutions multifonctions, toners, cartouches et consommables d’impression.',
    fullDesc: 'Des systèmes d’impression fiables et économiques pour gérer vos flux documentaires en toute sérénité. Gestion de parc et approvisionnement continu en consommables certifiés.',
    image: impressionImage,
    features: ['Multifonctions couleur & monochrome', 'Consommables d’origine garantis', 'Optimisation des coûts à la page', 'Scanners de numérisation rapide'],
    equipmentExamples: ['Copieurs multifonctions A3/A4', 'Imprimantes laser réseau', 'Cartouches et toners d’origine', 'Scanners de production'],
  },
  {
    id: 'fournitures-bureau',
    title: 'Fournitures de bureau',
    shortDesc: 'Papeterie, fournitures administratives, accessoires de classement et équipements essentiels à l’organisation quotidienne.',
    fullDesc: 'L’ensemble des fournitures de bureau indispensables au bon fonctionnement quotidien de vos équipes administratives et opérationnelles.',
    image: fournituresBureauImage,
    features: ['Papeterie haut de gamme', 'Classement & archivage', 'Fournitures administratives', 'Livraison groupée programmée'],
    equipmentExamples: ['Papiers reprographiques certifiés', 'Modules & classeurs d’archivage', 'Écriture et petit matériel de bureau', 'Accessoires de réunion et tableaux'],
  },
  {
    id: 'reseau-securite',
    title: 'Réseau & Sécurité',
    shortDesc: 'Équipements réseau, solutions Wi-Fi, vidéosurveillance, contrôle d’accès et infrastructures de connectivité.',
    fullDesc: 'Construisez une infrastructure réseau robuste, sécurisée et pérenne pour interconnecter vos collaborateurs et protéger vos locaux professionnels.',
    image: reseauDatacenterImage,
    features: ['Réseau filaire Gigabit/10G', 'Bornes Wi-Fi 6 managées', 'Vidéoprotection IP HD', 'Contrôle d’accès biométrique & badge'],
    equipmentExamples: ['Switches administrables & routeurs', 'Baies de brassage & câblage RJ45/Fibre', 'Caméras dômes et enregistreurs NVR', 'Onduleurs de protection électrique'],
  },
  {
    id: 'mobilier-bureau',
    title: 'Mobilier de bureau',
    shortDesc: 'Bureaux, fauteuils ergonomiques, rangements, tables de réunion et solutions d’aménagement professionnel.',
    fullDesc: 'Aménagez des espaces de travail conviviaux, inspirants et ergonomiques, favorisant la productivité et le bien-être de vos collaborateurs.',
    image: mobilierBureauImage,
    features: ['Ergonomie certifiée', 'Design contemporain épuré', 'Agencement modulaire', 'Matériaux durables'],
    equipmentExamples: ['Bureaux individuels & benchtops', 'Fauteuils de direction & opérationnels', 'Tables de réunion & conférence', 'Caissons et armoires métalliques'],
  },
];

export const SERVICE_PILLARS = [
  {
    slug: 'consulting-it',
    title: 'Consulting IT & Solutions digitales',
    kicker: 'Pôle Ingénierie & Conseil',
    shortDesc: 'Conseil en architecture, ingénierie logicielle sur-mesure, intégration ERP/CRM et accompagnement à la transformation digitale.',
    image: consultingITImage,
    points: [
      'Conseil et accompagnement stratégique IT',
      'Développement d’applications web et mobiles',
      'Développement de solutions SaaS sur-mesure',
      'Conception et commercialisation de solutions logicielles',
      'Intégration de solutions ERP et CRM',
      'Automatisation des processus métiers',
      'Transformation digitale',
      'Maintenance et évolution applicative continue',
    ],
    methodology: [
      { step: '01', title: 'Audit & Cadrage', desc: 'Analyse des processus métiers, de l’architecture existante et formalisation du cahier des charges.' },
      { step: '02', title: 'Conception & Architecture', desc: 'Choix de la stack technologique, modélisation des données et validation des flux.' },
      { step: '03', title: 'Développement Agile', desc: 'Sprints itératifs, intégration continue, revues régulières et tests automatisés.' },
      { step: '04', title: 'Déploiement & Évolution', desc: 'Mise en production sécurisée, formation des utilisateurs et maintenance préventive.' },
    ],
    benefits: [
      'Gains de productivité grâce à l’automatisation des tâches répétitives',
      'Évolutivité garantie pour accompagner la croissance de vos équipes',
      'Interopérabilité fluide avec vos systèmes d’information existants',
      'Support technique réactif basé au Maroc',
    ],
  },
  {
    slug: 'design-ux-ui',
    title: 'Design UX/UI',
    kicker: 'Pôle Expérience & Produit',
    shortDesc: 'Conception d’expériences digitales intuitives, centrées sur les utilisateurs finaux et orientées vers la performance métier.',
    image: designUIUXImage,
    points: [
      'UX Research et analyse approfondie des besoins',
      'Audit UX et ergonomique des solutions existantes',
      'Architecture de l’information & cartographie',
      'Conception des parcours utilisateurs clés',
      'Wireframing et prototypage interactif',
      'Design d’interfaces web et mobile haute fidélité',
      'Création et gouvernance de Design Systems',
      'Tests utilisateurs et optimisation de l’expérience',
      'UX Writing & clarté sémantique',
    ],
    methodology: [
      { step: '01', title: 'Recherche Utilisateur', desc: 'Interviews, personas, analyse du comportement et identification des points de friction.' },
      { step: '02', title: 'Architecture & Wireframes', desc: 'Schématisation des flux critiques et hiérarchisation des fonctionnalités.' },
      { step: '03', title: 'UI Design & Prototypage', desc: 'Conception graphique soignée, micro-interactions et prototypes cliquables.' },
      { step: '04', title: 'Tests & Spécifications', desc: 'Validation auprès d’utilisateurs cibles et livrables de développement normés.' },
    ],
    benefits: [
      'Taux d’adoption utilisateur maximisé dès le lancement',
      'Diminution sensible des coûts de développement et des reprises de code',
      'Identité visuelle moderne et cohérente sur l’ensemble de vos supports',
      'Parcours de conversion fluidifiés et mesurables',
    ],
  },
  {
    slug: 'fournitures-equipements',
    title: 'Fournitures & Équipements professionnels',
    kicker: 'Pôle Approvisionnement & Aménagement',
    shortDesc: 'Fourniture globale de matériel informatique, réseaux, impression, mobilier et équipements administratifs pour entreprises.',
    image: materielITImage,
    points: [
      'Matériel informatique (postes, laptops, écrans)',
      'Impression et consommables d’origine',
      'Fournitures de bureau et organisation',
      'Réseau, Wi-Fi managé et sécurité des locaux',
      'Mobilier de bureau et aménagement d’espaces',
      'Livraison et installation sur site au Maroc',
      'Garantie et service après-vente réactif',
    ],
    methodology: [
      { step: '01', title: 'Expression du Besoin', desc: 'Identification précise des équipements, volumes et contraintes de votre infrastructure.' },
      { step: '02', title: 'Proposition & Cotation', desc: 'Devis détaillé sous 24h à 48h avec alternatives techniques et garanties.' },
      { step: '03', title: 'Logistique & Déploiement', desc: 'Préparation, livraison sécurisée et mise en place dans vos locaux.' },
      { step: '04', title: 'Suivi & Réapprovisionnement', desc: 'Gestion de réassort pour vos consommables et support dédié.' },
    ],
    benefits: [
      'Un interlocuteur unique pour l’ensemble de vos besoins bureautiques et IT',
      'Tarification B2B négociée et transparente',
      'Fiabilité des livraisons et respect des délais convenus',
      'Matériel professionnel certifié et garanti',
    ],
  },
];
