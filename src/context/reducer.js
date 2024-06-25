// src/context/reducer.js

export function reducer(state, action) {
      switch (action.type) {
        case "SIDENAV_TYPE": {
          return { ...state, sidenavType: action.value };
        }
        case "SIDENAV_COLOR": {
          return { ...state, sidenavColor: action.value };
        }
        case "TRANSPARENT_NAVBAR": {
          return { ...state, transparentNavbar: action.value };
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
    export const setSidenavColor = (dispatch, value) =>
      dispatch({ type: "SIDENAV_COLOR", value });
    export const setTransparentNavbar = (dispatch, value) =>
      dispatch({ type: "TRANSPARENT_NAVBAR", value });
    export const setOpenConfigurator = (dispatch, value) =>
      dispatch({ type: "OPEN_CONFIGURATOR", value });
    