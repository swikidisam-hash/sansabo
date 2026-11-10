const navItems = [
  'Accueil',
  'Urgence',
  'Médecine',
  'Pharmacies',
  'Ambulances',
  'Admin',
];

const metrics = [
  { label: 'Patients actifs', value: '24.8k', delta: '+18%' },
  { label: 'Interventions SOS', value: '1.2k', delta: '+9%' },
  { label: 'Téléconsultations', value: '8.4k', delta: '+22%' },
  { label: 'Prestataires vérifiés', value: '640', delta: '+7%' },
];

const serviceCards = [
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

const crisisSignals = [
  'Fièvre élevée et confusion',
  'Douleur thoracique intense',
  'Saignement important',
  'Difficulté respiratoire',
  'Crise psychiatrique',
];

const nearbyPlaces = [
  {
    name: 'Hôpital universitaire de Kinshasa',
    kind: 'Urgence / cardiologie',
    distance: '1.2 km',
    status: 'Lits disponibles',
  },
  {
    name: 'Clinique Sainte Marie',
    kind: 'Médecine générale',
    distance: '2.6 km',
    status: 'Ouvert 24h/24',
  },
  {
    name: 'Pharmacie Kivu Santé',
    kind: 'Médicaments / livraison',
    distance: '950 m',
    status: 'Stock disponible',
  },
];

const dashboardCards = [
  { label: 'Consultations', value: '847', badge: '+12%' },
  { label: 'SOS actifs', value: '34', badge: '5 urgents' },
  { label: 'Paiements', value: 'FC 62M', badge: 'Cette semaine' },
  { label: 'Satisfaction', value: '96%', badge: 'Très bon' },
];

const safetyChecklist = [
  'Authentification multi-facteur',
  'Chiffrement des données sensibles',
  'Journal d’audit traçable',
  'Conformité médicale et RGPD',
  'RLS, consentements et sécurité des accès',
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark" aria-label="Logo SANSABO">
            <span className="cross" />
            <span className="heart" />
          </div>
          <div>
            <div className="brand-name">SANSABO</div>
            <div className="brand-tagline">Votre santé, notre urgence.</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="top-actions">
          <button className="header-pill">FR</button>
          <button className="header-pill">Connexion</button>
          <button className="sos-mini" aria-label="Bouton SOS rapide">
            SOS
          </button>
        </div>
      </header>

      <main className="page-content">
        <section className="hero-panel">
          <div className="hero-copy">
            <span className="eyebrow">Plateforme santé panafricaine</span>
            <h1>Le réseau santé qui réagit avant l’urgence.</h1>
            <p>
              SANSABO connecte patients, professionnels, hôpitaux, ambulances, pharmacies et
              institutions dans un écosystème de santé numérique, sécurisé et accessible.
            </p>

            <div className="hero-actions">
              <button className="primary-sos" aria-label="Déclencher un SOS">
                <span className="sos-icon">✚</span>
                SOS médical
              </button>
              <button className="secondary-button">Réserver une consultation</button>
            </div>

            <div className="search-box" aria-label="Recherche médicale">
              <span className="search-label">Recherche médicale</span>
              <input type="text" placeholder="Traiter un symptôme, un hôpital, un spécialiste..." />
              <button>Rechercher</button>
            </div>
          </div>

          <aside className="hero-card">
            <div className="card-header">
              <span className="online-dot" />
              <strong>Intervention active</strong>
            </div>
            <div className="location-box">
              <span>Kinshasa — Gombe</span>
              <strong>Distance : 1.4 km</strong>
            </div>
            <div className="signal-list">
              {crisisSignals.map((signal) => (
                <div key={signal} className="signal-item">
                  <span className="signal-bullet" />
                  {signal}
                </div>
              ))}
            </div>
            <div className="emergency-resource">
              <div>
                <small>Prestataire assigné</small>
                <strong>Dr. A. Mbuyi</strong>
              </div>
              <span>ETA : 4 min</span>
            </div>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Indicateurs clé">
          {metrics.map((metric) => (
            <div key={metric.label} className="stat-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <em>{metric.delta}</em>
            </div>
          ))}
        </section>

        <section className="content-grid">
          <div className="services-panel panel-block">
            <div className="panel-head">
              <div>
                <span className="eyebrow subtle">Services</span>
                <h2>Une plateforme médicale complète</h2>
              </div>
              <button className="ghost-button">Tout voir</button>
            </div>

            <div className="card-grid">
              {serviceCards.map((service) => (
                <article key={service.title} className={`mini-card ${service.accent}`}>
                  <div className="mini-icon">✚</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="panel-block spotlight-panel">
            <span className="eyebrow subtle">Alertes et vigilance</span>
            <h2>Canaux d’intervention et sécurité</h2>
            <ul className="check-list">
              {safetyChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="terms-box">
              <strong>Information médicale</strong>
              <p>
                Cette analyse ne remplace pas une consultation médicale avec un professionnel de
                santé. En cas d’urgence, contactez immédiatement les services de secours.
              </p>
            </div>
          </div>
        </section>

        <section className="panel-block map-panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow subtle">Localisation</span>
              <h2>Hôpitaux et pharmacies à proximité</h2>
            </div>
            <button className="ghost-button">Ouvrir la carte</button>
          </div>

          <div className="place-list">
            {nearbyPlaces.map((place) => (
              <article key={place.name} className="place-card">
                <div>
                  <h3>{place.name}</h3>
                  <p>{place.kind}</p>
                </div>
                <div className="place-meta">
                  <span>{place.distance}</span>
                  <strong>{place.status}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-section">
          <div className="panel-block">
            <span className="eyebrow subtle">Tableau de bord</span>
            <h2>Vue d’ensemble opérationnelle</h2>
            <div className="dashboard-grid">
              {dashboardCards.map((card) => (
                <div key={card.label} className="dash-card">
                  <span>{card.label}</span>
                  <strong>{card.value}</strong>
                  <em>{card.badge}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-block patient-panel">
            <div className="patient-summary-header">
              <div className="avatar">PM</div>
              <div>
                <strong>Patient — Marie K.</strong>
                <small>Historique médical actif</small>
              </div>
            </div>
            <div className="medical-summary">
              <div>
                <span>Groupe sanguin</span>
                <strong>O+</strong>
              </div>
              <div>
                <span>Allergies</span>
                <strong>Pénicilline</strong>
              </div>
              <div>
                <span>Vaccinations</span>
                <strong>À jour</strong>
              </div>
            </div>
            <button className="secondary-button wide">Voir le dossier médical</button>
          </div>
        </section>

        <section className="architecture-section panel-block">
          <span className="eyebrow subtle">Architecture</span>
          <h2>Conçu pour un déploiement panafricain sûr et extensible</h2>
          <div className="architecture-grid">
            <div>
              <strong>Frontend</strong>
              <p>React + TypeScript + design system réutilisable pour web, PWA et interfaces dédiées.</p>
            </div>
            <div>
              <strong>Backend</strong>
              <p>Supabase, PostgreSQL, Auth, RLS, Realtime, Storage, Edge Functions et API REST.</p>
            </div>
            <div>
              <strong>Mobile & IoT</strong>
              <p>Applications Android, iOS, smartwatches, CarPlay/Android Auto, et services connectés.</p>
            </div>
            <div>
              <strong>Security</strong>
              <p>Consentement, journal d’audit, chiffrement, sauvegardes, contrôles d’accès et gouvernance.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>SANSABO</strong>
          <p>Votre santé, notre urgence.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p>+243 816 779 488</p>
          <p>Contact@sansabo.net</p>
        </div>
        <div>
          <strong>Mentions</strong>
          <p>Conditions d’utilisation</p>
          <p>Politique de confidentialité</p>
        </div>
        <div>
          <strong>Copyright</strong>
          <p>©2026 SANSABO</p>
          <p>Développé par Swikidisa Makaya</p>
        </div>
      </footer>
    </div>
  );
}
