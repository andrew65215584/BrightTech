import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../redux/auth/authOperations';
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
 const [errorMessage, seterrorMessage] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault();

    if (email.length && password.length) {


      if (email.includes("@")) {
        const user = { email, password };

      dispatch(loginUser(user));
      history.push("/users")
      setEmail('');
      setpassword('');
      } else {
        seterrorMessage("Пожалуйста введите существующую почту")
      }
    } else {
      seterrorMessage("Пожалуйста заполните все поля")
    }

    
  };
  return (
    <>
      <h2 className="title-logandreg">Войти </h2>
      <form onSubmit={handleSubmit} className="form">
      {errorMessage && <p style={{color : "red"}}> {errorMessage}</p>}
        <label className="label">
          Email
          <input onChange={evt => setEmail(evt.target.value)} value={email} />
        </label>

        <label className="label">
          Password
          <input
            onChange={evt => setpassword(evt.target.value)}
            value={password}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </>
  );
};

export default Login;
