import {
  Homepage,
  AboutUs,
  PopularKost,
  OurPackages,
  Help,
  DetailKostPage,
} from "./pages/user";

export const routes = [
  {
    title: "User Pages",
    layout: "UserLayout",
    pages: [
      {
        name: "Home Page",
        path: "user/home",
        element: <Homepage />,
        isHomePage: true,
      },
      {
        name: "About Us",
        path: "user/about",
        element: <AboutUs />,
      },
      {
        name: "Popular Kost",
        path: "user/popular",
        element: <PopularKost />,
      },
      {
        name: "Our Packages",
        path: "user/packages",
        element: <OurPackages />,
      },
      {
        name: "Help",
        path: "user/help",
        element: <Help />,
      },
      {
        name: "Detail Kost",
        path: "user/kost/:id",
        element: <DetailKostPage />,
      },
    ],
  },
];

export default routes;
