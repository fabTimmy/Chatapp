import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./ErrorPage/ErrorBoundary";
import App from "./App";
import { Provider } from "react-redux";
import {store}  from "./Models/Store";
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/*" element={<ToastContainer />} />
          </Routes>
        </Provider>
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
