import React from "react";
import ReactDOM from "react-dom";
import path from 'path';
import dotenv from 'dotenv';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { MapProvider } from "./Context/Context";

// Loading .env file
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname + '/.env') });
}

ReactDOM.render(
  <MapProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MapProvider>,
  document.getElementById("root")
);
registerServiceWorker();
