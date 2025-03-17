import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface RouterContextProps {
  route: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextProps | undefined>(undefined);

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [route, setRoute] = useState<string>(window.location.pathname);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useNavigator = () => {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error("useNavigator must be used within a RouterProvider");
  }

  return context;
};

export default RouterContext;
