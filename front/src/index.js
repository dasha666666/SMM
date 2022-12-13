import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./store/store";
import "./index.scss";

const store = new Store();

const Context = createContext(store);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  </BrowserRouter>
);

export default Context;
