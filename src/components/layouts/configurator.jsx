// src/widgets/layout/configurator.jsx
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { useMaterialTailwindController } from "../../context";
import {
  setOpenConfigurator,
  setThemeColor,
  setSidenavType,
  setTritanopiaColor,
  setDeuteranopiaColor,
  setProtanopiaColor,
} from "../../context/reducer";
import {
  themeColors,
  protanopiaColors,
  deuteranopiaColors,
  tritanopiaColors,
} from "../../utils/styles/spanColors";

export function Configurator() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openConfigurator, themeColor, sidenavType } = controller;

  return (
    <aside
      className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white px-6 py-4 shadow-lg transition-transform duration-300 dark:bg-gray-800 ${
        openConfigurator ? "translate-x-0" : "translate-x-96"
      }`}
    >
      <div className="flex items-start justify-between pb-4">
        <div>
          <Typography variant="h5" color="blue-gray" className="dark:text-white">
            Configurator
          </Typography>
          <Typography className="font-normal text-blue-gray-600 dark:text-gray-300">
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
      <div className="py-4">
        <div className="mb-8">
          <Typography variant="h6" color="blue-gray" className="mb-3 dark:text-gray-300">
            Theme Colors
          </Typography>
          <div className="flex items-center gap-2">
            {Object.keys(themeColors).map((color) => (
              <span
                key={color}
                className={`h-8 w-8 cursor-pointer rounded-full border bg-gradient-to-br transition-transform hover:scale-110 ${
                  themeColors[color]
                } ${
                  themeColor === color ? "border-black" : "border-transparent"
                }`}
                onClick={() => setThemeColor(dispatch, color)}
                aria-label={`Setel warna sidenav ke ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <Typography variant="h6" color="blue-gray" className="mb-3 dark:text-gray-300">
            Theme Types
          </Typography>
          <Typography variant="small" color="gray" className="mb-3 dark:text-gray-300">
            Choose between 3 different theme types.
          </Typography>
          <div className="flex items-center gap-2">
            <Button
              variant={sidenavType === "dark" ? "gradient" : "outlined"}
              className="dark:text-white"
              onClick={() => setSidenavType(dispatch, "dark")}
            >
              Dark
            </Button>
            <Button
              variant={sidenavType === "white" ? "gradient" : "outlined"}
              className="dark:text-white"
              onClick={() => setSidenavType(dispatch, "white")}
            >
              White
            </Button>
          </div>
        </div>

        <div>
          <Typography variant="h6" color="blue-gray" className="mb-3 dark:text-gray-300">
            Theme For Color Blindness
          </Typography>
          <div className="mb-6">
            <Typography variant="h6" color="blue-gray" className="mb-2 dark:text-gray-300">
              Tritanopia
            </Typography>
            <div className="flex items-center gap-2">
              {Object.keys(tritanopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-8 w-8 cursor-pointer rounded-full border transition-transform hover:scale-110 ${tritanopiaColors[color]}`}
                  onClick={() => setTritanopiaColor(dispatch, color)}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <Typography variant="h6" color="blue-gray" className="mb-2 dark:text-gray-300">
              Protanopia
            </Typography>
            <div className="flex items-center gap-2">
              {Object.keys(protanopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-8 w-8 cursor-pointer rounded-full border transition-transform hover:scale-110 ${protanopiaColors[color]}`}
                  onClick={() => setProtanopiaColor(dispatch, color)}
                />
              ))}
            </div>
          </div>

          <div className="mb-6">
            <Typography variant="h6" color="blue-gray" className="mb-2 dark:text-gray-300">
              Deuteranopia
            </Typography>
            <div className="flex items-center gap-2">
              {Object.keys(deuteranopiaColors).map((color) => (
                <span
                  key={color}
                  className={`h-8 w-8 cursor-pointer rounded-full border transition-transform hover:scale-110 ${deuteranopiaColors[color]}`}
                  onClick={() => setDeuteranopiaColor(dispatch, color)}
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
