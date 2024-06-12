import {
  Homepage,
  AboutUs,
  PopularKost,
  Help,
  DetailKostPage,
} from "./pages/user";

const routes = [
  {
    title: "User Pages",
    layout: "UserLayout",
    pages: [
      {
        name: "Home Page",
        path: "/user/home",
        element: <Homepage />,
        isHomePage: true,
      },
      {
        name: "About Us",
        path: "/user/about",
        element: <AboutUs />,
        isAboutPage: true,
      },
      {
        name: "Popular Kost",
        path: "/user/popular",
        element: <PopularKost />,
      },
      {
        name: "Help",
        path: "/user/help",
        element: <Help />,
      },
      {
        path: "/user/kost/:id",
        element: <DetailKostPage />,
      },
    ],
  },
];

export default routes;
