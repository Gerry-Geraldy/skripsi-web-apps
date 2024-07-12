import { useState, useEffect } from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import { logo } from "../../../public";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useMaterialTailwindController } from "../../context";
import { setOpenConfigurator } from "../../context/reducer";
import Configurator from "./configurator";
import useThemeSwitcherConfig from "../../utils/themeSwitcherConfig";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/user/home";
  const isAboutPage = location.pathname === "/user/about";
  const [controller, dispatch] = useMaterialTailwindController();
  const { themeColor, tritanopiaColor, protanopiaColor, deuteranopiaColor, sidenavType } =
    controller;
  const { currentHoverBgColor, currentHoverTextColor } = useThemeSwitcherConfig(
    themeColor,
    tritanopiaColor,
    protanopiaColor,
    deuteranopiaColor
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (!isMobile) setOpenNav(false);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <section
      className={`mx-auto max-w-screen p-5 relative z-50 tw-full navbar ${
        isMobile ? (sidenavType === 'dark' ? 'bg-gray-800' : 'bg-white') : ''
      } ${isScrolled ? (sidenavType === 'dark' ? 'bg-gray-800 shadow-gray-700' : 'bg-white shadow-gray-600') : ''}`}
      style={{
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className={`flex items-center justify-between ${sidenavType === 'dark' ? 'text-white' : 'text-blue-gray-900'}`}>
        <Typography
          href="/"
          variant="h6"
          className="cursor-pointer py-1.5 hover:text-white"
        >
          <img src={logo} alt="Marikost" width={50} height={50} />
        </Typography>
        {isMobile ? (
          <div className="flex items-center">
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={toggleNav}
              aria-label={openNav ? "Tutup Navigasi" : "Buka Navigasi"}
            >
              {openNav ? (
                <XMarkIcon
                  className="h-6 w-6"
                  strokeWidth={2}
                  onClick={closeNav}
                />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
            <Configurator />
            <FontAwesomeIcon
              icon={faCog}
              size="lg"
              className={`ml-4 cursor-pointer ${currentHoverTextColor} ${
                isScrolled
                  ? (sidenavType === 'dark' ? 'text-white' : 'text-headingBlack hover:text-white')
                  : (isHomePage || isAboutPage) && !isMobile
                  ? 'hover:text-white'
                  : ''
              }`}
              onClick={() => setOpenConfigurator(dispatch, true)}
            />
          </div>
        ) : (
          <div className="flex items-center justify-end">
            <ul className="my-2 flex flex-row gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:flex lg:mr-0">
              {routes[0].pages
                .filter((page) => !page.isDetailPage)
                .map((page, index) => (
                  <Typography
                    key={index}
                    as="li"
                    variant="small"
                    className={`p-2 font-mulishSemiBold text-[13px] rounded-lg ${currentHoverBgColor} ${
                      (isHomePage || isAboutPage) && !isMobile
                        ? 'text-white'
                        : isScrolled
                        ? (sidenavType === 'dark' ? 'text-white' : 'text-headingBlack hover:text-white ')
                        : ''
                    }`}
                  >
                    <Link
                      to={page.path}
                      className={`p-2 font-medium ${
                        isScrolled
                          ? (sidenavType === 'dark' ? 'text-white' : 'text-headingBlack hover:text-white')
                          : (isHomePage || isAboutPage) && !isMobile
                          ? 'text-white '
                          : ''
                      }`}
                    >
                      {page.name}
                    </Link>
                  </Typography>
                ))}
            </ul>

            <Configurator />
            <FontAwesomeIcon
              icon={faCog}
              size="xl"
              className={`ml-4 cursor-pointer ${currentHoverTextColor} ${
                isScrolled
                  ? (sidenavType === 'dark' ? 'text-white hover:scale-105 focus:scale-95' : 'text-headingBlack hover:scale-105 focus:scale-95')
                  : (isHomePage || isAboutPage) && !isMobile
                  ? 'text-white hover:text-headingBlack'
                  : ''
              }`}
              onClick={() => setOpenConfigurator(dispatch, true)}
            />
          </div>
        )}
      </div>
      {isMobile && (
        <Collapse open={openNav}>
          <ul
            className={`my-2 flex flex-col items-center w-full gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:flex lg:mr-0`}
          >
            {routes[0].pages
              .filter((page) => !page.isDetailPage)
              .map((page, index) => (
                <Typography
                  key={index}
                  as="li"
                  variant="small"
                  className={`p-2 font-mulishSemiBold text-[13px] ${currentHoverBgColor} rounded-lg ${
                    (isHomePage || isAboutPage) && !isMobile
                      ? 'text-white'
                      : isScrolled
                      ? (sidenavType === 'dark' ? 'text-white' : 'text-headingBlack hover:text-white')
                      : ''
                  }`}
                >
                  <Link
                    to={page.path}
                    className={`p-2 font-medium ${
                      isScrolled
                        ? (sidenavType === 'dark' ? 'text-white' : 'text-headingBlack hover:text-white')
                        : (isHomePage || isAboutPage) && !isMobile
                        ? 'text-white hover:text-headingBlack'
                        : ''
                    }`}
                  >
                    {page.name}
                  </Link>
                </Typography>
              ))}
          </ul>
        </Collapse>
      )}
    </section>
  );
};

export default Navbar;
