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
import Navbar from "./components/Navbar";

export const AppContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  /**
   * Redirect to login page if user is not logged in
   */

  const navigate = useNavigate();

  useEffect(() => {
    const token = cookie.get("token");

    if (!token) {
      setIsLoggedIn(false);
      setUser({});
    } else {
      const fetchData = async () => {
        const res = await axios.get("/api/auth", {
          headers: { Authorization: token },
        });
        console.log(res.data);
        setIsLoggedIn(true);
        setUser(res.data);
      };
      fetchData().catch((err) => {
        // if token is not valid, remove it from cookie
        console.error(err);
        cookie.remove("token");
        setIsLoggedIn(false);
        setUser({});
      });
    }
  }, [navigate]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          user,
          setUser,
        }}
      >
        <Navbar />

        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
