import { createContext, ReactNode, useState } from "react";

export type ModeType = "dark" | "light";

type GlobalContextValueType = {
  mode: ModeType;
  toggleMode: () => void;
};

export const GlobalContext = createContext<GlobalContextValueType | null>(null);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<ModeType>(
    (localStorage.getItem("mode") as ModeType) || "dark"
  );

  function toggleMode() {
    if (mode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }

    setMode((mode) => (mode === "dark" ? "light" : "dark"));
  }
  const value = { mode, toggleMode };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
