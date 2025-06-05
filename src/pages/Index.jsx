import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";
import EnquiryForm from "../Components/loginMOdel.jsx";
import AllPropertypage from "./AllPropertypage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <App />
    ),
    children: [
      {
        index: true,
        element: <Home />
      },
      {
      path: "/enquiry",
      element: <EnquiryForm />,
      },
       {
      path: "/all-property-page",
      element: <AllPropertypage/>,
      },
 
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);

export default router;