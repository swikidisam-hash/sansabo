export const stats = [
  { label: 'Patients actifs', value: '24.8k', delta: '+18%' },
  { label: 'Interventions SOS', value: '1.2k', delta: '+9%' },
  { label: 'Téléconsultations', value: '8.4k', delta: '+22%' },
  { label: 'Prestataires vérifiés', value: '640', delta: '+7%' },
];

export const serviceTiles = [
  {
    title: 'SOS & triage',
    description: 'Alerte médicale rapide avec localisation, triage et mise en relation avec les intervenants disponibles.',
    accent: 'red',
  },
  {
    title: 'Dossier médical',
    description: 'Historique centralisé, authentifié et sécurisé pour les patients, médecins et établissements.',
    accent: 'blue',
  },
  {
    title: 'Télémédecine',
    description: 'Consultations vidéo, audio, chat, prescription électronique et suivi médicale.',
    accent: 'navy',
  },
  {
    title: 'Pharmacies & livraisons',
    description: 'Catalogue de produits, stock synchronisé, paiement sécurisé et livraison de médicaments.',
    accent: 'green',
  },
  {
    title: 'Maternité & vaccination',
    description: 'Suivi de grossesse, rappel vaccinal et gestion des dossiers enfants.',
    accent: 'pink',
  },
  {
    title: 'Santé mentale',
    description: 'Auto-évaluation, orientation psychologique et téléconsultation sécurisée.',
    accent: 'violet',
  },
];

export const recentAlerts = [
  'Fièvre élevée et confusion',
  'Douleur thoracique intense',
  'Saignement important',
  'Difficulté respiratoire',
  'Crise psychiatrique',
];

export const patientHistory = [
  { title: 'Suivi diabète', doctor: 'Dr. Noel M. / Endocrinologie', date: '12/10/2026' },
  { title: 'Contrôle visuel', doctor: 'Dr. Lusala / Ophtalmologie', date: '03/10/2026' },
  { title: 'Consultation générale', doctor: 'Dr. Nkulu / Médecine générale', date: '21/09/2026' },
  { title: 'Vaccination ROR', doctor: 'Infirmière K. Ngalula', date: '16/09/2026' },
];

export const emergencyContacts = [
  { name: 'Maman', phone: '+243 812 000 111' },
  { name: 'Mari', phone: '+243 818 101 222' },
  { name: 'Ambulance référente', phone: '+243 990 555 777' },
];

export const providerQueue = [
  { name: 'Dr. Kabila', specialty: 'Urgences', state: 'En attente', eta: '4 min' },
  { name: 'Dr. Bile', specialty: 'Cardiologie', state: 'En consultation', eta: '10 min' },
  { name: 'Infirmière A. D.', specialty: 'Triage', state: 'Disponible', eta: '2 min' },
];

export const adminMetrics = [
  { label: 'Consultations', value: '847', badge: '+12%' },
  { label: 'SOS actifs', value: '34', badge: '5 urgents' },
  { label: 'Paiements', value: 'FC 62M', badge: 'Cette semaine' },
  { label: 'Satisfaction', value: '96%', badge: 'Très bon' },
];
