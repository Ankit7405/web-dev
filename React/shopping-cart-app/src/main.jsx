import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster/>
    </BrowserRouter>
  </StrictMode>
);
