import React from "react";
import { Routes, Route } from "react-router-dom";

// import routes from "./routes";
import Home from "../Components/user/Home/Index";
import Services from "../Components/user/Services/Index";
import ContactUs from "../Components/user/ContactUs/Index";
import AboutUs from "../Components/user/AboutUs/Index";

function ProtectedRoutes() {
  const routes = [
    {
      path: "/",
      component: Home,
      title: "Home",
    },
    {
      path: "*",
      component: Home,
      title: "Home",
    },
    {
      path: "/services",
      component: Services,
      title: "Services",
    },
    {
      path: "/contactus",
      component: ContactUs,
      title: "Contact Us",
    },
    {
      path: "/aboutus",
      component: AboutUs,
      title: "About Us",
    },
  ];
  return (
    <Routes>
      {routes.map((data, index) => {
        return (
          <Route
            exact
            path={data.path}
            element={<data.component />}
            key={index}
          />
        );
      })}
    </Routes>
  );
}

export default ProtectedRoutes;
