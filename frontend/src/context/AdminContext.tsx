import { createContext, useContext, useState, type ReactNode } from "react";

type AdminContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const AdminContext = createContext<AdminContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AdminContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
