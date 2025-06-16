import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";
import EnquiryForm from "../Components/Form/loginModel.jsx";
import AllPropertypage from "./AllPropertypage.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import Property_Gallary from "../Components/Property-View/Gallery.jsx";
import BlogViewer from "../Components/Blog/BlogView.jsx";
import OurServices from "./OurServices.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/enquiry",
        element: <EnquiryForm />,
      },
      {
        path: "/properties",
        element: <AllPropertypage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogViewer />,
      },{
        path:"/services",
        element:<OurServices/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
