import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cookies, setCookie] = useCookies(['admintoken']); // Get and set the "admintoken" cookie
const navigate=useNavigate()
  const validateForm = () => {
    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Make a POST request to your login API endpoint
      // const apiUrl = 
      // const apiUrl = 'https://busy-pink-dalmatian-ring.cyclic.app/login';
      const apiUrl = 'https://signtruckapi.signtruck.ca/login';


      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      // Handle the response (e.g., show a success message, redirect, etc.)
      console.log(response.data);

      // Redirect to "/users" after successful login
    //   history.push('/users');
          setCookie('admintoken', response.data.token, { path: '/' });

      setCookie("admintoken", response.data.token, { path: "/" });
    if(response.data.role = "Admin"){
      // window.location.href='/users'
      navigate("/users")
    }else{
      alert("Only admin can login")
      return;
    }

      // Reset the form after successful login
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <section className='login_sec'>
        <div className='custom-container'>
          <div className='login_inner'>
            <div className='loginForm'>
              <h3 className='formttl'>Login</h3>
              <form onSubmit={handleLogin}>
                <div className='formGrp'>
                  <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: emailError ? '1px solid red' : '1px solid #ccc', marginBottom: emailError ? '0' : '' }}
                  />
                  {emailError && <span className='error'>{emailError}</span>}
                </div>
                <div className='formGrp'>
                  <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: passwordError ? '1px solid red' : '1px solid #ccc', marginBottom: passwordError ? '0' : '' }}
                  />
                  {passwordError && <span className='error'>{passwordError}</span>}
                </div>
                <div className='form_Submit'>
                  <input type='submit' value='Login' />
                </div>
                {/* <div className='msg'>
                  Not registered? <a href='#'>Create an account</a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
