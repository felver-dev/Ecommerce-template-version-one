import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRoute from "./helpers/AppRoute";

import { DefaultLayout } from "./layouts";
import "./assets/scss/style.scss";
import { Preloader } from "./components";
import ScrollToTop from "./helpers/scroll-top";

const Welcome = lazy(() => import("./pages/Welcome"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const Chat = lazy(() => import("./pages/Chat"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Search = lazy(() => import("./pages/Search"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Notification = lazy(() => import("./pages/Notification"));
const Contact = lazy(() => import("./pages/Contact"));
const Order = lazy(() => import("./pages/Order"));

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route
              path={process.env.PUBLIC_URL + "/"}
              exact
              component={Welcome}
            />
            <Route
              path={process.env.PUBLIC_URL + "/welcome"}
              component={Welcome}
            />
            <Route
              path={process.env.PUBLIC_URL + "/register"}
              component={Register}
            />
            <Route path={process.env.PUBLIC_URL + "/login"} component={Login} />
            <AppRoute
              path={process.env.PUBLIC_URL + "/home"}
              component={Home}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/shop"}
              component={Shop}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/product/:id"}
              component={Product}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/chat"}
              component={Chat}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/cart"}
              component={Cart}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/wishlist"}
              component={Wishlist}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/checkout"}
              component={Checkout}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/not-found"}
              component={NotFound}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/search"}
              component={Search}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/profile"}
              component={Profile}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/edit-profile"}
              component={EditProfile}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/notification"}
              component={Notification}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/contact"}
              component={Contact}
              layout={DefaultLayout}
            />
            <AppRoute
              path={process.env.PUBLIC_URL + "/order"}
              component={Order}
              layout={DefaultLayout}
            />
            <AppRoute exact component={NotFound} layout={DefaultLayout} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}

export default App;
