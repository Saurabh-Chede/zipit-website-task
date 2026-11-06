import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "seller_auth_user";
const AuthContext = createContext(null);

function readStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock authentication, kept in the browser (localStorage).
 * Replace the body of `login` / `signup` with real API calls,
 * e.g. const res = await fetch('/api/auth/login', { method: 'POST', body: ... })
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  const persist = useCallback((nextUser) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return nextUser;
  }, []);

  const login = useCallback(
    async ({ email }) => {
      await wait(600);
      return persist({ name: email.split("@")[0], email });
    },
    [persist],
  );

  const signup = useCallback(
    async ({ name, email }) => {
      await wait(600);
      return persist({ name: name.trim(), email });
    },
    [persist],
  );

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), login, signup, logout }),
    [user, login, signup, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
