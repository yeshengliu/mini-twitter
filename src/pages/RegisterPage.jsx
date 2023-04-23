import React, { useMemo } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBValidation,
  MDBValidationItem,
} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdbreact';
import loginimg from '../assets/login.jpg';
import axios from 'axios';
import { createAvatar } from '@dicebear/core';
import { adventurerNeutral } from '@dicebear/collection';
import cookie from 'js-cookie';

function RegisterPage() {
  const [formValue, setFormValue] = React.useState({
    username: '',
    email: '',
    password: '',
    rePassword: '',
  });
  const [errMsg, setErrMsg] = React.useState('');

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formValue.password !== formValue.rePassword) {
        setErrMsg('Passwords do not match');
        return;
      }
      const avatarUrl = createAvatar(adventurerNeutral, {
        size: 128,
        seed: formValue.username,
      }).toDataUriSync();

      const res = await axios.post('/api/register', {
        username: formValue.username,
        email: formValue.email,
        password: formValue.password,
        avatar: avatarUrl,
        name: username,
        bio: '',
        description: '',
      });
      setErrMsg('');
      cookie.set('token', res.data);
      // redirect to home page
      window.location.href = '/';
    } catch (err) {
      setErrMsg(err.response.data);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src={loginimg}
            alt="Login image"
            className="w-100"
            style={{ objectFit: 'cover', objectPosition: 'left' }}
          />
        </MDBCol>
        <MDBCol sm="6">
          <div className="pt-5">
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            <span className="h1 fw-bold mb-0">Twitter</span>
          </div>

          {/* https://mdbootstrap.com/docs/react/forms/validation/#docsTabsOverview */}
          <MDBValidation
            className="row g-3 pe-5 pt-5 mx-5"
            onSubmit={handleSubmit}
          >
            <div className="w-50 pt-4">
              <h3
                className="fw-normal mb-3 ps-0 pb-3 text-start"
                style={{ letterSpacing: '1px' }}
              >
                Register
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
              feedback="Please fill out email."
              invalid
            >
              <MDBInput
                wrapperClass="mb-4 w-100"
                value={formValue.email}
                name="email"
                onChange={onChange}
                required
                label="Email"
                type="email"
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

            <MDBValidationItem
              className="col-md-12"
              feedback="Please re-enter password"
              invalid
            >
              <MDBInput
                wrapperClass="mb-4"
                value={formValue.rePassword}
                name="rePassword"
                onChange={onChange}
                required
                label="Re-enter Password"
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
              Register
            </MDBBtn>

            {errMsg && (
              <div className="bg-danger mb-4 p-3 mx-auto w-100 rounded-5 bg-opacity-25">
                {errMsg}
              </div>
            )}

            <p>
              Already have an account?{' '}
              <a href="/login" className="link-info">
                Login here
              </a>
            </p>
          </MDBValidation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterPage;
