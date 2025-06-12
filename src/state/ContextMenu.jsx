import { createContext, useState } from "react";

// Define the shape of the context (optional but good for clarity)
const defaultMenuContext = {
  menuColor: "white",
  setMenuColor: () => {}, // placeholder function
};

// Create context with default values
export const MenuContext = createContext(defaultMenuContext);

// Provider component
export const MenuProvider = ({ children }) => {
  const [menuColor, setMenuColor] = useState("white");

  return (
    <MenuContext.Provider value={{ menuColor, setMenuColor }}>
      {children}
    </MenuContext.Provider>
  );
};
