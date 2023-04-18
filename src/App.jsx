import { useState, createContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import WelcomePage from "./pages/WelcomePage";
import Navbar from "./components/Navbar";

export const AppContext = createContext();

function App() {
  /** 
 * TODO: 
 * Redirect to login page if user is not logged in

  const navigate = useNavigate();

  useEffect(() => {
    const token = cookie.get("token");
    console.log("token", token);
    // redirect to login page if cookie is not set
    if (!token) {
      navigate("/login");
    } else {
      const fetchData = async (res) => {
        try {
          const res = await axios.get("/api/auth", {
            headers: { authorization: token },
          });
          console.log(res.data);
        } catch (err) {
          console.error(err);
          cookie.remove("token");
          navigate("/login");
        }
      };
      fetchData();
    }
  }, [navigate]);
  */

  return (
    <div className="App">
      <Navbar />
      <AppContext.Provider value={{}}>
        <Routes>
          <Route exact path="/" element={<IndexPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile" element={<WelcomePage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
