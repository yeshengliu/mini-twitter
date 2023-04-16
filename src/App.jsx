import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const AppContext = createContext();

function App() {
  return (
    <Router>
      <div className="App">
        <AppContext.Provider value={{}}>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
