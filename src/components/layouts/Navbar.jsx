// Navbar.jsx
import { useState, useEffect } from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import routes from "../../routes";
import { logo } from "../../../public";
import PropTypes from "prop-types";

function NavList({ isMobile, isHomePage, isScrolled }) {
  return (
    <ul
      className={`my-2 flex ${
        isMobile ? "flex-col items-center" : "flex-row"
      } gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:flex lg:mr-0`}
    >
      {routes[0].pages.map((page, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          className={`p-1 font-medium ${
            isHomePage && !isMobile
              ? "text-white"
              : isScrolled
              ? "text-black"
              : ""
          }`}
        >
          <Link
            to={page.path}
            className={`p-1 font-medium ${
              isScrolled
                ? "text-black"
                : isHomePage && !isMobile
                ? "text-white"
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
  isScrolled: PropTypes.bool.isRequired,
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/user/home";

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (!isMobile) setOpenNav(false);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // Jika posisi scroll lebih besar dari 0, atur isScrolled menjadi true
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
      className={`mx-auto max-w-screen p-5 relative z-10 tw-full navbar  ${
        isMobile ? "bg-white" : ""
      } ${isScrolled ? "bg-white shadow-sm rounded-md shadow-gray-600" : ""}`}
      style={{
        // backgroundColor: isScrolled ? "#fff" : "",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          href="/"
          variant="h6"
          className="cursor-pointer py-1.5"
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
            isScrolled={isScrolled}
          />
        )}
      </div>
      {isMobile && (
        <Collapse open={openNav}>
          <NavList isMobile={true} isHomePage={isHomePage} />
        </Collapse>
      )}
    </section>
  );
};

export default Navbar;
