// src/components/DynamicTitle/DashboardDynamicTitle.jsx
import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

const dashboardRouteTitleMap = {
  "/dashboard": "Dashboard Home",
  "/dashboard/newsletter-subscribers": "Newsletter Subscribers",
  "/dashboard/trainer-applied": "Trainer Applied",
  "/dashboard/applied-trainers/:id": "Trainer Details",
  "/dashboard/trainers": "Trainers",
  "/dashboard/activity-log": "Activity Log",
  "/dashboard/my-profile": "My Profile",
  "/dashboard/add-forum": "Add Forum",
  "/dashboard/forum-details/:id": "Forum Details",
  "/dashboard/add-class": "Add Class",
  "/dashboard/add-slot": "Add Slot",
  "/dashboard/manage-slots": "Manage Slots",
  "/dashboard/balance": "Balance",
  "/dashboard/booked-trainers": "Booked Trainers",
};

const DashboardDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    let title = "FitNest";

    for (const routePattern in dashboardRouteTitleMap) {
      const matched = matchPath({ path: routePattern, end: true }, pathname);
      if (matched) {
        title = `FitNest | ${dashboardRouteTitleMap[routePattern]}`;
        break;
      }
    }

    document.title = title;
  }, [location]);

  return null;
};

export default DashboardDynamicTitle;
