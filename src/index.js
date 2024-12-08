import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Your main app component
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
