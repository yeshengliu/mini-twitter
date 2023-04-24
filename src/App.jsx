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
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";
import Navbar from "./components/Navbar";

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState({});

  /**
   * Validate the token and set logged in user
   */

  const navigate = useNavigate();
  useEffect(() => {
    const token = cookie.get("token");

    if (!token) {
      setIsLoggedIn(false);
      setCurrUser({});
    } else {
      const fetchData = async () => {
        const res = await axios.get("/api/auth", {
          headers: { Authorization: token },
        });
        console.log(res.data);
        setIsLoggedIn(true);
        setCurrUser(res.data);
      };
      fetchData().catch((err) => {
        // if token is not valid, remove it from cookie
        console.error(err);
        cookie.remove("token");
        setIsLoggedIn(false);
        setCurrUser({});
      });
    }
  }, [navigate]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          currUser,
          setCurrUser,
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/profile/:username" element={<ProfilePage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
          <Route exact path="/logout" element={<LogoutPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
