import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";
import loginimg from "../assets/login.jpg";
import axios from "axios";
import cookie from "js-cookie";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formValue, setFormValue] = React.useState({
    username: "",
    password: "",
  });
  const [errMsg, setErrMsg] = React.useState("");

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formValue.username || !formValue.password) {
        setErrMsg("Please fill out all fields");
        return;
      }
      const res = await axios.post("/api/login", {
        username: formValue.username,
        password: formValue.password,
      });
      setErrMsg("");
      // set cookie
      cookie.set("token", res.data);
      // redirect to main page
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setErrMsg(err.response.data);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="pt-5">
            <Link to="/" className="link">
              {" "}
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Twitter</span>
            </Link>
          </div>

          <MDBValidation
            className="row g-3 pe-5 pt-5 mx-5"
            onSubmit={handleSubmit}
          >
            <div className="w-50 pt-4">
              <h3
                className="fw-normal mb-3 ps-0 pb-3 text-start"
                style={{ letterSpacing: "1px" }}
              >
                Login
              </h3>
            </div>

            <MDBValidationItem
              className="col-md-12"
              feedback="Please fill out username."
              invalid
            >
              <MDBInput
                wrapperClass="mb-4 w-100"
                value={formValue.username}
                name="username"
                onChange={onChange}
                required
                label="Username"
                type="username"
                size="lg"
              />
            </MDBValidationItem>

            <MDBValidationItem
              className="col-md-12"
              feedback="Please fill out password"
              invalid
            >
              <MDBInput
                wrapperClass="mb-4"
                value={formValue.password}
                name="password"
                onChange={onChange}
                required
                label="Password"
                type="password"
                size="lg"
              />
            </MDBValidationItem>

            <MDBBtn
              type="submit"
              className="w-75 mb-4 mx-auto"
              color="info"
              size="lg"
            >
              Login
            </MDBBtn>

            {errMsg && (
              <div className="bg-danger mb-4 p-3 mx-auto w-100 rounded-5 bg-opacity-25">
                {errMsg}
              </div>
            )}

            <p>
              Don't have an account?{" "}
              <a href="/register" className="link-info">
                Register here
              </a>
            </p>
          </MDBValidation>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={loginimg}
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
