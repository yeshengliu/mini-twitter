import React from "react";
import { useNavigate } from "react-router-dom";

function NotLoggedIn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        type="button"
        className="btn btn-link px-3 me-2"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        type="button"
        className="btn btn-secondary me-3"
        onClick={() => {
          navigate("/register");
        }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default NotLoggedIn;
