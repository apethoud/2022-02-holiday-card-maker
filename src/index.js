import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import CardBuilder from "./components/CardBuilder";
import Profile from "./components/Profile";
import AuthChecker from "./components/AuthChecker";
import NotFound from "./components/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route
                path="card-builder"
                element={
                  <AuthChecker>
                    <CardBuilder />
                  </AuthChecker>
                }
              />
              <Route path="profile/:username" element={<Profile />} />{" "}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
