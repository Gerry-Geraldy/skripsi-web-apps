import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "../../context";
import {
  setOpenConfigurator,
  setSidenavColor,
  setSidenavType,
} from "../../context/reducer";

export const sidenavColors = {
  primary: "from-primary to-orange-600",
  dark: "from-black to-black border-gray-200",
  green: "from-green-400 to-green-600",
  red: "from-red-400 to-red-600",
  pink: "from-pink-400 to-pink-600",
};

export const protanopiaColors = {
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  black: "bg-black",
  white: "bg-white",
};

export const deuteranopiaColors = {
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  black: "bg-black",
  white: "bg-white",
};

export const tritanopiaColors = {
  red: "bg-red-500",
  green: "bg-green-500",
  black: "bg-black",
  white: "bg-white",
};

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, sidenavColor, sidenavType } = controller;

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-2.5 shadow-lg transition-transform duration-300 ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between px-6 pt-8 pb-6">
        <div>
          <Typography variant="h5" color="blue-gray">
            Dashboard Configurator
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            See our options.
          </Typography>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          onClick={() => setOpenConfigurator(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5" />
        </IconButton>
      </div>
      <div className="py-4 px-6">
        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Theme Colors
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            {Object.keys(sidenavColors).map((color) => (
              <span
                key={color}
                className={`h-6 w-6 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-105 ${
                  sidenavColors[color]
                } ${
                  sidenavColor === color ? "border-black" : "border-transparent"
                }`}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <Typography variant="h6" color="blue-gray">
            Sidenav Types
          </Typography>
          <Typography variant="small" color="gray">
            Choose between 3 different sidenav types.
          </Typography>
          <div className="mt-3 flex items-center gap-2">
            <Button
              variant={sidenavType === "dark" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "dark")}
            >
              Dark
            </Button>
            <Button
              variant={sidenavType === "transparent" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "transparent")}
            >
              Transparent
            </Button>
            <Button
              variant={sidenavType === "white" ? "gradient" : "outlined"}
              onClick={() => setSidenavType(dispatch, "white")}
            >
              White
            </Button>
          </div>
        </div>

        <div >
          <Typography variant="h6" color="blue-gray">
            Color Blindness
          </Typography>

          <div className="mt-6">
            <Typography variant="small" color="blue-gray">
              Protanopia
            </Typography>
            <div className="mt-3 flex items-center gap-2">
              {Object.keys(protanopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-6 w-6 cursor-pointer rounded-full border transition-transform hover:scale-105 ${protanopiaColors[color]}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Typography variant="small" color="blue-gray">
              Deuteranopia
            </Typography>
            <div className="mt-3 flex items-center gap-2">
              {Object.keys(deuteranopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-6 w-6 cursor-pointer rounded-full border transition-transform hover:scale-105 ${deuteranopiaColors[color]}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Typography variant="small" color="blue-gray">
              Tritanopia
            </Typography>
            <div className="mt-3 flex items-center gap-2">
              {Object.keys(tritanopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-6 w-6 cursor-pointer rounded-full border transition-transform hover:scale-105 ${tritanopiaColors[color]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

Configurator.displayName = "/src/widgets/layout/configurator.jsx";

export default Configurator;
