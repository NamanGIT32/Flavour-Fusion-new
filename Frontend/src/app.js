import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UsersContext from "./utils/UserContext";
import Store from "./utils/Redux/Store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import Help from "./components/Help";
import Login from "./Auth/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./Auth/signup";
//Dynamic import or lazy loading of Contact
const Contact = lazy(() => import("./components/Contact"));
//Dynamic import or lazy loading of Contact
const About = lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <ChakraProvider>
        <Provider store={Store}>
            <Header />
            <div className="mt-[150px] ">
            <Outlet></Outlet>
            </div>
            <Footer />
        </Provider>
      </ChakraProvider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: (
          <GoogleOAuthProvider clientId="231402567867-2ml8rlethilfr7fhce32utuqe18r6qo2.apps.googleusercontent.com">
            <Login />
          </GoogleOAuthProvider>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about", // Here we can also write path:"about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
