// src/context/reducer.js

export function reducer(state, action) {
  switch (action.type) {
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "THEME_COLOR": {
      return { ...state, themeColor: action.value };
    }
    case "PROTANOPIA_THEME": {
      return { ...state, protanopiaColor: action.value };
    }
    case "DEUTERANOPIA_THEME": {
      return { ...state, deuteranopiaColor: action.value };
    }
    case "TRITANOPIA_THEME": {
      return { ...state, tritanopiaColor: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setThemeColor = (dispatch, value) =>
  dispatch({ type: "THEME_COLOR", value });
export const setProtanopiaColor = (dispatch, value) =>
  dispatch({ type: "PROTANOPIA_THEME", value });
export const setDeuteranopiacolor = (dispatch, value) =>
  dispatch({ type: "DEUTERANOPIA_THEME", value });
export const setTritanopiaColor = (dispatch, value) =>
  dispatch({ type: "TRITANOPIA_THEME", value });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
