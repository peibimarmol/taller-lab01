import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import styles from './WelcomePage.module.css';

export default function WelcomePage() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.page}>
      {/* decorative background */}
      <div className={styles.blobOrange} aria-hidden="true" />
      <div className={styles.blobBlue} aria-hidden="true" />

      {/* Top navbar */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect width="24" height="24" rx="6" fill="#111827" />
            <path
              d="M7 12.5L10.5 16L17 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className={styles.navTitle}>FlowOps</span>
        </div>
        <div className={styles.navActions}>
          <span className={styles.navUser}>{username}</span>
          <button className={styles.btnLogout} onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            Bienvenido,{' '}
            <span className={styles.heroAccent}>{username}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Has iniciado sesión correctamente en FlowOps. Tu sesión está activa y segura.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={styles.cardShell}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: 'var(--color-secondary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"
                    fill="#111827"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Sesión activa</h2>
                <p className={styles.cardText}>
                  Token de acceso almacenado en sesión. La sesión expira al cerrar el navegador.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardShell}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: 'var(--color-tertiary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5L12 1z"
                    fill="#111827"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Ruta protegida</h2>
                <p className={styles.cardText}>
                  Esta página solo es accesible tras autenticarse con credenciales válidas.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cardShell}>
            <div className={styles.card}>
              <div className={styles.cardIcon} style={{ background: '#f3f4f6' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13 2L4.09 12.26c-.36.43-.09 1.07.45 1.14l5.46.64L6 22l10.91-10.26c.36-.43.09-1.07-.45-1.14l-5.46-.64L13 2z"
                    fill="#111827"
                  />
                </svg>
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Backend JWT</h2>
                <p className={styles.cardText}>
                  Autenticado vía POST /auth/login. El token fue emitido por el servicio FastAPI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Microsoft 2026 Certifications */}
        <div className={styles.certSection}>
          <div className={styles.certHeader}>
            <div className={styles.certHeaderIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M11.49 3.17c.43-1.2 2.09-1.2 2.52 0l1.39 3.88 4.1.34c1.27.1 1.79 1.7.82 2.53l-3.1 2.69 1 3.97c.31 1.24-1.06 2.22-2.15 1.55L12 16.07l-3.57 2.06c-1.09.63-2.46-.31-2.15-1.55l1-3.97-3.1-2.69c-.97-.83-.45-2.43.82-2.53l4.1-.34 1.39-3.88z"
                  fill="#111827"
                />
              </svg>
            </div>
            <div>
              <h2 className={styles.certSectionTitle}>Certificaciones Microsoft 2026</h2>
              <p className={styles.certSectionSubtitle}>
                Nuevas certificaciones y actualizaciones del programa Microsoft Learn para 2026
              </p>
            </div>
          </div>

          <div className={styles.certGrid}>
            <div className={styles.certCardShell}>
              <div className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <div className={styles.certIcon} style={{ background: '#dbeafe' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                        fill="#1d4ed8"
                      />
                    </svg>
                  </div>
                  <span className={styles.certBadge} style={{ background: '#eff6ff', color: '#1d4ed8' }}>
                    Principiante
                  </span>
                </div>
                <div className={styles.certCardContent}>
                  <h3 className={styles.certCardTitle}>Azure AI Fundamentals</h3>
                  <p className={styles.certCardExam}>Examen AI-901 · Actualizado abril 2026</p>
                  <p className={styles.certCardText}>
                    Conceptos fundamentales de IA en Azure, incluyendo principios de IA responsable e
                    implementación de soluciones con Microsoft AI Foundry.
                  </p>
                </div>
                <a
                  className={styles.certLink}
                  href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificación →
                </a>
              </div>
            </div>

            <div className={styles.certCardShell}>
              <div className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <div className={styles.certIcon} style={{ background: '#fce7f3' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 17.93V18a1 1 0 0 0-2 0v1.93A8.001 8.001 0 0 1 4.07 13H6a1 1 0 0 0 0-2H4.07A8.001 8.001 0 0 1 11 4.07V6a1 1 0 0 0 2 0V4.07A8.001 8.001 0 0 1 19.93 11H18a1 1 0 0 0 0 2h1.93A8.001 8.001 0 0 1 13 19.93z"
                        fill="#9d174d"
                      />
                    </svg>
                  </div>
                  <span className={styles.certBadge} style={{ background: '#fdf2f8', color: '#9d174d' }}>
                    Intermedio
                  </span>
                </div>
                <div className={styles.certCardContent}>
                  <h3 className={styles.certCardTitle}>Azure AI Engineer Associate</h3>
                  <p className={styles.certCardExam}>Examen AI-102 · Disponible 2026</p>
                  <p className={styles.certCardText}>
                    Diseña e implementa soluciones de IA con Azure AI Services, Azure AI Search y
                    Azure OpenAI. Renovación anual requerida.
                  </p>
                </div>
                <a
                  className={styles.certLink}
                  href="https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificación →
                </a>
              </div>
            </div>

            <div className={styles.certCardShell}>
              <div className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <div className={styles.certIcon} style={{ background: '#dcfce7' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"
                        fill="#15803d"
                      />
                    </svg>
                  </div>
                  <span className={styles.certBadge} style={{ background: '#f0fdf4', color: '#15803d' }}>
                    Intermedio
                  </span>
                </div>
                <div className={styles.certCardContent}>
                  <h3 className={styles.certCardTitle}>Azure Data Scientist Associate</h3>
                  <p className={styles.certCardExam}>Examen DP-100 · Disponible 2026</p>
                  <p className={styles.certCardText}>
                    Gestión de ingestión de datos, entrenamiento e implementación de modelos y
                    monitoreo de soluciones ML con Python, Azure Machine Learning y MLflow.
                  </p>
                </div>
                <a
                  className={styles.certLink}
                  href="https://learn.microsoft.com/en-us/credentials/certifications/azure-data-scientist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificación →
                </a>
              </div>
            </div>

            <div className={styles.certCardShell}>
              <div className={styles.certCard}>
                <div className={styles.certCardTop}>
                  <div className={styles.certIcon} style={{ background: '#fef9c3' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"
                        fill="#92400e"
                      />
                    </svg>
                  </div>
                  <span className={styles.certBadge} style={{ background: '#fefce8', color: '#92400e' }}>
                    Asociado
                  </span>
                </div>
                <div className={styles.certCardContent}>
                  <h3 className={styles.certCardTitle}>M365 Collaboration Communications Engineer</h3>
                  <p className={styles.certCardExam}>Nuevo · Incorporado abril 2026</p>
                  <p className={styles.certCardText}>
                    Certificación añadida como opción de habilidades en la especialización Calling
                    for Microsoft Teams, incorporada al programa en abril de 2026.
                  </p>
                </div>
                <a
                  className={styles.certLink}
                  href="https://learn.microsoft.com/en-us/credentials/certifications/m365-collaboration-communications-systems-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver certificación →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
