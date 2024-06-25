import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Footer, Navbar } from "../components/layouts";
import routes from "../routes";
import { Homepage } from "../pages/user";

export function UserLayout() {
  const { pathname } = useLocation();
  const isHomepage = pathname === "/user/home";


  console.log('Rendering UserLayout with pathname:', pathname);

  return (
    <section>
      <Navbar isHomepage={isHomepage}/>
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
    </section>
  );
}

UserLayout.displayName = "/src/layouts/UserLayout.jsx";

export default UserLayout;
