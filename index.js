import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./components/cart/cart.context";
import { PopupProvider } from "./pages/slashie/popup.context";
import { ScoreProvider } from "./pages/shop/score.context";
//import { BrowserRouter, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScoreProvider>
        <CartProvider>
          <PopupProvider>
            <App />
          </PopupProvider>
        </CartProvider>
      </ScoreProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
