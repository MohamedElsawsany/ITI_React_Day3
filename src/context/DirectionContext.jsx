import { createContext, useContext, useState } from "react";

const DirectionContext = createContext();

export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState("ltr");

  const toggleDirection = () => {
    setDirection((prev) => (prev === "ltr" ? "rtl" : "ltr"));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      <div dir={direction}>{children}</div>
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  return useContext(DirectionContext);
}
