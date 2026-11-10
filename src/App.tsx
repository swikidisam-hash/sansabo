import { useMemo, useState } from 'react';
import { adminMetrics, emergencyContacts, patientHistory, providerQueue, recentAlerts, serviceTiles, stats } from './data/mockData';

type ViewKey = 'home' | 'patient' | 'provider' | 'admin';

const navItems: { key: ViewKey; label: string }[] = [
  { key: 'home', label: 'Accueil' },
  { key: 'patient', label: 'Patient' },
  { key: 'provider', label: 'Professionnel' },
  { key: 'admin', label: 'Admin' },
];

const viewMeta: Record<ViewKey, { title: string; subtitle: string }> = {
  home: {
    title: 'SANSABO',
    subtitle: 'Votre santé, notre urgence.',
  },
  patient: {
    title: 'Dossier médical numérique',
    subtitle: 'Historique sécurisé, consentements et suivi.',
  },
  provider: {
    title: 'Espace professionnel',
    subtitle: 'Triage, urgences, téléconsultations et interventions.',
  },
  admin: {
    title: 'Administration centrale',
    subtitle: 'Vérification des prestataires, paiements, conformité et analytics.',
  },
};

export default function App() {
  const [activeView, setActiveView] = useState<ViewKey>('home');

  const currentMeta = useMemo(() => viewMeta[activeView], [activeView]);

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
            <button
              key={item.key}
              type="button"
              className={`nav-button ${activeView === item.key ? 'active' : ''}`}
              onClick={() => setActiveView(item.key)}
            >
              {item.label}
            </button>
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
            <h1>{currentMeta.title}</h1>
            <p>{currentMeta.subtitle}</p>

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
              {recentAlerts.map((alert) => (
                <div key={alert} className="signal-item">
                  <span className="signal-bullet" />
                  {alert}
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
          {stats.map((metric) => (
            <div key={metric.label} className="stat-card">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <em>{metric.delta}</em>
            </div>
          ))}
        </section>

        {activeView === 'home' && (
          <>
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
                  {serviceTiles.map((service) => (
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
                  {['Authentification multi-facteur', 'Chiffrement des données sensibles', 'Journal d’audit traçable', 'Conformité médicale et RGPD', 'RLS, consentements et sécurité des accès'].map((item) => (
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
                {[
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
                ].map((place) => (
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
          </>
        )}

        {activeView === 'patient' && (
          <section className="dashboard-section expanded-view">
            <div className="panel-block">
              <span className="eyebrow subtle">Dossier médical</span>
              <h2>Fiche patient sécurisée</h2>

              <div className="profile-topline">
                <div className="avatar">MK</div>
                <div>
                  <strong>Marie K.</strong>
                  <p>ID médical : SAN-2026-00412</p>
                </div>
              </div>

              <div className="medical-summary-grid">
                <div className="summary-row"><span>Groupe sanguin</span><strong>O+</strong></div>
                <div className="summary-row"><span>Taille / Poids</span><strong>1.68 m / 63 kg</strong></div>
                <div className="summary-row"><span>Allergies</span><strong>Pénicilline</strong></div>
                <div className="summary-row"><span>Maladies chroniques</span><strong>Diabète de type 2</strong></div>
                <div className="summary-row"><span>Vaccinations</span><strong>À jour</strong></div>
                <div className="summary-row"><span>Contact d’urgence</span><strong>+243 812 000 111</strong></div>
              </div>
            </div>

            <div className="panel-block">
              <span className="eyebrow subtle">Historique</span>
              <h2>Consultations récentes</h2>
              <div className="history-list">
                {patientHistory.map((entry) => (
                  <div key={entry.date} className="history-item">
                    <div>
                      <strong>{entry.title}</strong>
                      <p>{entry.doctor}</p>
                    </div>
                    <span>{entry.date}</span>
                  </div>
                ))}
              </div>

              <div className="contact-block">
                <h3>Contacts d’urgence</h3>
                {emergencyContacts.map((contact) => (
                  <div key={contact.name} className="contact-item">
                    <span>{contact.name}</span>
                    <strong>{contact.phone}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeView === 'provider' && (
          <section className="dashboard-section expanded-view">
            <div className="panel-block">
              <span className="eyebrow subtle">Professionnels</span>
              <h2>File d’attente de triage</h2>

              <div className="queue-list">
                {providerQueue.map((item) => (
                  <div key={item.name} className="queue-item">
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.specialty}</p>
                    </div>
                    <div className="queue-status-block">
                      <span className={`status-pill ${item.state.toLowerCase()}`}>{item.state}</span>
                      <strong>{item.eta}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-block">
              <span className="eyebrow subtle">Téléconsultation</span>
              <h2>Disponibilité</h2>
              <div className="availability-box">
                <div>
                  <span>Consultation vidéo</span>
                  <strong>12 créneaux</strong>
                </div>
                <div>
                  <span>Appel audio</span>
                  <strong>7 créneaux</strong>
                </div>
                <div>
                  <span>Chat médical</span>
                  <strong>Ouvert</strong>
                </div>
              </div>
              <button className="secondary-button wide">Voir le planning</button>
            </div>
          </section>
        )}

        {activeView === 'admin' && (
          <section className="dashboard-section expanded-view">
            <div className="panel-block">
              <span className="eyebrow subtle">Analytics</span>
              <h2>Tableau de bord central</h2>
              <div className="dashboard-grid">
                {adminMetrics.map((card) => (
                  <div key={card.label} className="dash-card">
                    <span>{card.label}</span>
                    <strong>{card.value}</strong>
                    <em>{card.badge}</em>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-block">
              <span className="eyebrow subtle">Conformité</span>
              <h2>Vérification des prestataires</h2>
              <ul className="check-list compact-list">
                {['Vérification des diplômes', 'Validation des autorisations', 'Paiements et cautions', 'Horaires et litiges', 'Audit sur 90 jours'].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

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
              <p>Applications Android, iOS, smartwatches, CarPlay/Android Auto et services connectés.</p>
            </div>
            <div>
              <strong>Security</strong>
              <p>Consentement, journal d’audit, chiffrement, sauvegardes et gouvernance des accès.</p>
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
