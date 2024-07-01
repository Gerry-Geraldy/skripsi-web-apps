import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../components/layouts";
import routes from "../routes";
import { Homepage } from "../pages/user";
import { useMaterialTailwindController } from "../context";

export function UserLayout() {
  const { pathname } = useLocation();
  const isHomepage = pathname === "/user/home";
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  console.log("Rendering UserLayout with pathname:", pathname);

  return (
    <section className={`${sidenavType === "dark" ? "dark" : ""}`}>
      <div className="dark:bg-gray-900">
        <Navbar isHomepage={isHomepage} />
        <div>
          <Routes>
            <Route exact path="/user/home" element={<Homepage />} />
            {routes.map(
              ({ layout, pages }) =>
                layout === "UserLayout" &&
                pages.map(({ path, element }) => (
                  <Route exact key={path} path={path} element={element} />
                ))
            )}
            <Route path="*" element={<Navigate to="/user/home" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </section>
  );
}

UserLayout.displayName = "/src/layouts/UserLayout.jsx";

export default UserLayout;
