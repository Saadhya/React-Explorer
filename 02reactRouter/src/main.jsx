import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Home from "./components/home/Home.jsx";
// import Layout from "./components/Layout.jsx";
// import About from "./components/aboutus/About.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import User from "./components/user/User.jsx";

// first way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home/> },
//       { path: "about", element: <About/> },
//       { path: "contact", element: <Contact/> },
//     ],
//   },
// ]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
