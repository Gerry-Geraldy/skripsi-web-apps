// UserLayout.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Navbar } from "../components/layouts";
import routes from "../routes";

export function UserLayout() {
  const { pathname } = useLocation();
  const isHomepage = pathname === "/user/home";

  return (
    <section>
      <Navbar isHomepage={isHomepage} />
      <div>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "UserLayout" &&
              pages.map(({ path, element }) => (
                <Route exact key={path} path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
      <Footer />
    </section>
  );
}

UserLayout.displayName = "/src/layouts/UserLayout.jsx";

export default UserLayout;
