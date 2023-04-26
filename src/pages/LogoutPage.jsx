import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

function LogoutPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    cookie.remove("token");
    navigate("/");
  }, []);

  return (
    <div>
      Logging out...
    </div>
  );
}

export default LogoutPage;