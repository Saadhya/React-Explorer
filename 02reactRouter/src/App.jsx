import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./components/aboutus/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import User from "./components/user/User.jsx";
import Github, { githubInfoLoader } from "./components/github/Github.jsx";

function App() {
  // second way
  const router = createBrowserRouter(
    createRoutesFromElements(
      //this is due to outlet defined in the layout file
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* nested routes */}
        <Route path="about" element={<About />}>
          <Route path="users" element={<Github />} loader={githubInfoLoader} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userId" element={<User />} />
        <Route path="github" element={<Github />} loader={githubInfoLoader} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
