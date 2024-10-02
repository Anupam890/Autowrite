import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import {store} from "./store/store.js";
// import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
