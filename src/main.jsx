import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Your main app component
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

// Wrap App with AuthProvider so the context is available in the entire app
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
