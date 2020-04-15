import React from "react";
const HomePage = React.lazy(() =>
  import("../Page/HomePage" /* webpackChunkName: "HomePage" */)
);
const AboutPage = React.lazy(() =>
  import("../Page/AboutPage" /* webpackChunkName: "AboutPage" */)
);
const LoginPage = React.lazy(() =>
  import("../Page/LoginPage" /* webpackChunkName: "AboutPage" */)
);
const CreatePage = React.lazy(() =>
  import("../Page/CreatePage" /* webpackChunkName: "CreatePage" */)
);

const routes = {
  HomePage: {
    lable: "Home",
    path: "/",
    component: HomePage,
  },
  AboutPage: {
    lable: "About",
    path: "/about",
    component: AboutPage,
  },
  LoginPage: {
    lable: "Login",
    path: "/auth/login",
    component: LoginPage,
  },
  CreatePage: {
    lable: "Create",
    path: "/create",
    component: CreatePage,
  },
};
export default routes;
