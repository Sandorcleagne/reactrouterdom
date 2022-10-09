import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root.jsx";
import { action as destroyAction } from "./routes/destory";
import Index from "./routes/index.jsx";
import ErrorPage from "./errorPage.jsx";
import EditContact, { action as editAction } from "./routes/edit";
import Contact, { loader as contactLoader } from "./routes/contact";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      { index: true, element: <Index /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
