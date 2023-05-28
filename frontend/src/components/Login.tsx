import React, { useState, useEffect, FormEvent } from "react";
import './Login.css';
import Logo from '../image/compass_logo.svg';
import Input from '../components/Input';
import { useNavigate } from "react-router-dom";

import { InputErrors } from "../interfaces/Models";
import { PATH } from "../Utils/Constants";
import { MakeRequest } from "../Utils/MakeRequest";
import { JWTtoken, decodeToken } from "../Utils/JWT";

const Login: React.FC = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<InputErrors>({
    user: "",
    pass: "",
    serverError: ""
  });

  const nav = useNavigate();


  const insertNewError = (property: string, error: string) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [property]: error
    }))
  }

  const findErrors = (errors: InputErrors): boolean => {
    for (let key in errors) {
      if (errors[key] !== "") {
        return true;
      }
    }
    return false;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // RESET ERRORS
    insertNewError("user", "");
    insertNewError("pass", "");
    insertNewError("serverError", "");

    // CHECK INPUTS FOR ERRORS
    checkInputs();

    // IF NO ERROR IS FOUND, SEND REQUEST TO THE SERVER
    if (!findErrors(errors)) {
      const response = await MakeRequest(PATH.LOGIN, "POST", {
        user,
        password
      });
      
      // IF SERVER RETURNS FALSE (UNAUTHORIZED), THEN INSERT ERROR
      if (typeof response.access_token === 'string') {
        localStorage.setItem(JWTtoken, response.access_token);

        const isValidToken = localStorage.getItem(JWTtoken)

        if(isValidToken) nav("/")
      } else {
        insertNewError("serverError", "Usuário ou senha inválidos");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(JWTtoken);

    if(typeof token === 'string') nav("/");
  })

  const checkInputs = () => {
    if (user.length === 0) {
      insertNewError("user", "Digite o nome de usuário");
    }
    if (password.length === 0) {
      insertNewError("pass", "Digite a senha");
    }
  };

  return (
    <div className='container'>

      <div className='boxFormLogin'>
        <h1>Olá,</h1>
        <p>Para continuar navegando de forma segura, efetue o login</p>

        <form id='formLogin' className='formLogin' onSubmit={handleSubmit}>
          <h3>Login</h3>

          <Input
            type='text'
            name='userLogin'
            id='userLogin'
            value={user}
            className='input_control'
            placeholder='Username'
            onChange={(e) =>
              setUser(e.target.value)
            }
          />
          {errors.user.length > 0 && <small>{errors.user}</small>}

          <Input
            type='password'
            name='passwordLogin'
            id='passwordLogin'
            value={password}
            className='input_control'
            placeholder='Password'
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          {errors.pass.length > 0 && <small className="error">{errors.pass}</small>}
          {errors.serverError.length > 0 && <small className="error">{errors.serverError}</small>}

          <button type='submit' className='btnLogin'>Logar-se</button>
          <p className="log">
            Novo por aqui? <a href="/Register">Registre-se</a>
          </p>
        </form>
      </div>
      <div className='image'>
        <img src={Logo} alt='Compass logo' />
      </div>
    </div>
  );
};

export default Login;
