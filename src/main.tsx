import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Flowbite>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Flowbite>
);
