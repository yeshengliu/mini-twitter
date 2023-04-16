import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import loginimg from "../assets/login.jpg";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/register", {
      username,
      email,
      password
    })
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={loginimg}
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </MDBCol>
        <MDBCol sm="6">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row ps-5 pt-5">
              <MDBIcon
                fas
                icon="crow fa-3x me-3"
                style={{ color: "#709085" }}
              />
              <span className="h1 fw-bold mb-0">Twitter</span>
            </div>

            <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
              <h3
                className="fw-normal mb-3 ps-5 pb-3"
                style={{ letterSpacing: "1px" }}
              >
                Register
              </h3>

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Username"
                type="username"
                size="lg"
                onChange={(e) => setUsername(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Email"
                type="email"
                size="lg"
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Password"
                type="password"
                size="lg"
                onChange={(e) => setPassword(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 mx-5 w-100"
                label="Retype Password"
                type="password"
                size="lg"
              />

              <MDBBtn
                type="submit"
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
              >
                Register
              </MDBBtn>
              {/* <p className="small mb-5 pb-lg-3 ms-5">
              <a class="text-muted" href="#!">
                Forgot password?
              </a>
            </p> */}
              <p className="ms-5">
                Already have an account?{" "}
                <a href="/" className="link-info">
                  Login here
                </a>
              </p>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterPage;
