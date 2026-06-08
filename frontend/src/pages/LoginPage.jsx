import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.detail || 'Credenciales inválidas. Intenta de nuevo.');
        return;
      }

      const data = await res.json();
      login(data.access_token, username);
      navigate('/welcome', { replace: true });
    } catch {
      setError('No se pudo conectar con el servidor. Verifica que el backend esté en ejecución.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      {/* decorative background blobs */}
      <div className={styles.blobOrange} aria-hidden="true" />
      <div className={styles.blobBlue} aria-hidden="true" />

      <div className={styles.cardShell}>
        <div className={styles.card}>
          <header className={styles.header}>
            <div className={styles.logoMark} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="6" fill="#111827" />
                <path
                  d="M7 12.5L10.5 16L17 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className={styles.title}>FlowOps</h1>
            <p className={styles.subtitle}>Inicia sesión para continuar</p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">
                Usuario
              </label>
              <input
                id="username"
                className={styles.input}
                type="text"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                disabled={loading}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                className={styles.input}
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className={styles.errorBox} role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={loading || !username || !password}
            >
              {loading ? 'Ingresando…' : 'Iniciar sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
