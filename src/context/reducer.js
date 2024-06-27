// src/context/reducer.js

export function reducer(state, action) {
  switch (action.type) {
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "THEME_COLOR": {
      return {
        ...state,
        themeColor: action.value,
        tritanopiaColor: null,
        protanopiaColor: null,
        deuteranopiaColor: null,
      }; 
    }
    case "TRITANOPIA_THEME": {
      return {
        ...state,
        tritanopiaColor: action.value,
        protanopiaColor: null,
        deuteranopiaColor: null,
      }; 
    }
    case "RESET_TRITANOPIA_COLOR": {
      return { ...state, tritanopiaColor: null };
    }
    case "PROTANOPIA_THEME": {
      return {
        ...state,
        protanopiaColor: action.value,
        tritanopiaColor: null,
        deuteranopiaColor: null,
      }; 
    }
    case "RESET_PROTANOPIA_COLOR": {
      return { ...state, protanopiaColor: null };
    }
    case "DEUTERANOPIA_THEME": {
      return {
        ...state,
        deuteranopiaColor: action.value,
        tritanopiaColor: null,
        protanopiaColor: null,
      }; 
    }
    case "RESET_DEUTERANOPIA_COLOR": {
      return { ...state, deuteranopiaColor: null };
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

export const setTritanopiaColor = (dispatch, value) =>
  dispatch({ type: "TRITANOPIA_THEME", value });
export const resetTritanopiaColor = (dispatch) =>
  dispatch({ type: "RESET_TRITANOPIA_COLOR" });

export const setProtanopiaColor = (dispatch, value) =>
  dispatch({ type: "PROTANOPIA_THEME", value });
export const resetProtanopiaColor = (dispatch) =>
  dispatch({ type: "RESET_PROTANOPIA_COLOR" });

export const setDeuteranopiaColor = (dispatch, value) =>
  dispatch({ type: "DEUTERANOPIA_THEME", value });
export const resetDeuteranopiaColor = (dispatch) =>
  dispatch({ type: "RESET_DEUTERANOPIA_COLOR" });

export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
