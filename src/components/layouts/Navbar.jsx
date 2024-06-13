import { useState, useEffect } from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import { logo } from "../../../public";
import PropTypes from "prop-types";

function NavList({ isMobile, isHomePage, isAboutPage, isScrolled }) {
  return (
    <ul
      className={`my-2 flex ${
        isMobile ? "flex-col items-center w-full " : "flex-row"
      } gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:flex lg:mr-0`}
    >
      {routes[0].pages.map((page, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          className={`p-2 font-mulishSemiBold text-[13px] hover:bg-primary rounded-lg ${
            (isHomePage || isAboutPage) && !isMobile
              ? "text-white"
              : isScrolled
              ? "text-headingBlack hover:text-white"
              : ""
          }`}
        >
          <Link
            to={page.path}
            className={`p-2 font-medium  ${
              isScrolled
                ? "text-headingBlack hover:text-white"
                : (isHomePage || isAboutPage) && !isMobile
                ? "text-white hover:text-headingBlack"
                : ""
            }`}
          >
            {page.name}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

NavList.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isHomePage: PropTypes.bool.isRequired,
  isAboutPage: PropTypes.bool.isRequired,
  isScrolled: PropTypes.bool.isRequired,
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/user/home";
  const isAboutPage = location.pathname === "/user/about";

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (!isMobile) setOpenNav(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const closeNav = () => {
    setOpenNav(false);
  };

  return (
    <section
      className={`mx-auto max-w-screen p-5 relative z-10 tw-full navbar ${
        isMobile ? "bg-white" : ""
      } ${isScrolled ? "bg-white shadow-sm rounded-md shadow-gray-600" : ""}`}
      style={{
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          href="/"
          variant="h6"
          className="cursor-pointer py-1.5 hover:text-white"
          style={{ color: isScrolled ? "#434343" : "" }}
        >
          <img src={logo} alt="Marikost" width={50} height={50} />
        </Typography>
        {isMobile ? (
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={toggleNav}
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
        ) : (
          <NavList
            isMobile={false}
            isHomePage={isHomePage}
            isAboutPage={isAboutPage}
            isScrolled={isScrolled}
          />
        )}
      </div>
      {isMobile && (
        <Collapse open={openNav}>
          <NavList
            isMobile={true}
            isHomePage={isHomePage}
            isAboutPage={isAboutPage}
            isScrolled={isScrolled}
          />
        </Collapse>
      )}
    </section>
  );
};

export default Navbar;
