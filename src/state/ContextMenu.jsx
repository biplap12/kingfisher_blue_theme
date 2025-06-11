import { createContext, useEffect, useState } from "react";

// Context defaults
export const MenuContext = createContext({
  isOpen: false,
  toggleSidebar: () => {},
  closeSidebar: () => {},
  isDarkSection: false,
  setIsDarkSection: () => {},
  isScrollingDown: false,
  setIsScrollingDown: () => {},
  menuColor: "white",
  setMenuColor: () => {},
});

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [menuColor, setMenuColor] = useState("white"); // only use "white" or "black"

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);



  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleSidebar,
        closeSidebar,
        isDarkSection,
        setIsDarkSection,
        isScrollingDown,
        setIsScrollingDown,
        menuColor,
        setMenuColor,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
