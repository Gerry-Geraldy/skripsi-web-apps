// src/context/index.jsx

import React from "react";
import PropTypes from "prop-types";
import { reducer } from "./reducer";

export const MaterialTailwind = React.createContext(null);
MaterialTailwind.displayName = "MaterialTailwindContext";

export function MaterialTailwindControllerProvider({ children }) {
  const initialState = {
    themeColor: "primary",
    sidenavType: "white",
    transparentNavbar: true,
    openConfigurator: false,
    tritanopiaColor: null,
    protanopiaColor: null,
    deuteranopiaColor: null,
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);
  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <MaterialTailwind.Provider value={value}>
      {children}
    </MaterialTailwind.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMaterialTailwindController() {
  const context = React.useContext(MaterialTailwind);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = "/src/context/index.jsx";

MaterialTailwindControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
