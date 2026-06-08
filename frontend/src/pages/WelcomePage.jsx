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
      </main>
    </div>
  );
}
