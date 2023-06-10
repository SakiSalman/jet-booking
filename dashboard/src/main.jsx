import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/bootstrap.min.css";
import "./assets/css/feathericon.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import store from "./app/store";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      zIndex={9999999999}
    />
    <RouterProvider router={router} />
  </Provider>
);
