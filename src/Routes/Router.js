import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Aboutme from "../Pages/AboutMe/Aboutme";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Portfolios from "../Pages/Portfolio/Portfolios";
import Services from "../Pages/Services/Services";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },

      { path: "/services", element: <Services></Services> },
      { path: "/portfolio", element: <Portfolios></Portfolios> },
      { path: "/aboutme", element: <Aboutme></Aboutme> },
      { path: "/contactme", element: <ContactMe></ContactMe> },
    ],
  },
]);