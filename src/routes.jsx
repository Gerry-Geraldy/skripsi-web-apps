import {
      Homepage,
      AboutUs,
      PopularKost,
      OurPackages,
      Help,
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
            isHomePage: true, // Tambahkan properti isHomePage dengan nilai true
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
        ],
      },
    ];
    
    
    export default routes;
    