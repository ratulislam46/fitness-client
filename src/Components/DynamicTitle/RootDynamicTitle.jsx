// src/components/DynamicTitle/RootDynamicTitle.jsx
import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

const rootRouteTitleMap = {
  "/": "Home",
  "/all-trainer": "All Trainer",
  "/trainers/:id": "Trainer Details",
  "/book-slot/:slotId": "Book Slot",
  "/payment": "Payment",
  "/be-a-trainer": "Be a Trainer",
  "/all-forum-post": "Forum",
  "/single-forum-details/:id": "Forum Details",
  "/classes": "All Classes",
  "/trainer/:id": "Trainer Details",
  "/forbidden": "Forbidden",
  "/login": "Login",
  "/register": "Register",
};

const RootDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let title = "FitNest";

    for (const routePattern in rootRouteTitleMap) {
      const matched = matchPath({ path: routePattern, end: true }, pathname);
      if (matched) {
        title = `FitNest | ${rootRouteTitleMap[routePattern]}`;
        break;
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

export default RootDynamicTitle;
