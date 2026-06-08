/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext(null);

const TOKEN_KEY = 'flowops_access_token';
const USERNAME_KEY = 'flowops_username';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY));
  const [username, setUsername] = useState(() => sessionStorage.getItem(USERNAME_KEY));

  const login = useCallback((accessToken, user) => {
    sessionStorage.setItem(TOKEN_KEY, accessToken);
    sessionStorage.setItem(USERNAME_KEY, user);
    setToken(accessToken);
    setUsername(user);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USERNAME_KEY);
    setToken(null);
    setUsername(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, username, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
