import React, { useState } from "react";
import "./Register.css";
import Logo from "../image/compass_logo.svg";
import Input from "../components/Input";
import { InputErrors } from "../interfaces/Models";
import { PATH } from "../Utils/Constants";
import { MakeRequest } from "../Utils/MakeRequest";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !user || !birth || !email || !password || !passwordTwo) {
      setError("Preencha todos os campos!");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorEmail("Email inválido!");
      return;
    }
    if(!passwordRegex.test(password)){
      setErrorPassword("A senha deve conter minimo 8 caracter. Um numero, um letra maiuscula e um caracter especial");
      return;
    }
    if(password !== passwordTwo){
      setError("As senhas não conferem!")
      return;
    }else{
      
      
      await MakeRequest(PATH.REGISTER, "POST", {
          name,
          user,
          birthdate: birth,
          email,
          password,
          profile_photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZW18ZW58MHx8MHx8fDI%3D&auto=format&fit=crop&w=500&q=60"
        });

        navigate("/Login")

      }

    
  };



  return (
    <div className="container">
      <div className="boxFormRegister">
        <h1>Olá,</h1>
        <p>Por favor, registre-se para continuar</p>

        <form
          action=""
          method="post"
          className="formRegister"
          id="form"
          onSubmit={handleSubmit}
        >
          <h3>Registro</h3>

          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            className="input_control"
            placeholder="Name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />

          <Input
            type="text"
            name="user"
            id="user"
            value={user}
            className="input_control"
            placeholder="Username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser(e.target.value)
            }
          />

          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            className="input_control"
            placeholder="Email"
            onChange={
              (e) => [setEmail(e.target.value), setErrorEmail(""), setError("")]
            }
          />
          <label className="classError">{errorEmail}</label>
          <Input
            type="date"
            name="birth"
            id="birth"
            value={birth}
            className="input_control"
            placeholder="Birth"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBirth(e.target.value)
            }
          />

          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            className="input_control"
            placeholder="Password"
            onChange={e =>
              [setPassword(e.target.value), setErrorPassword(""), setError("")]
            }
          />
          <label className="classError">{errorPassword}</label>

          <Input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            value={passwordTwo}
            className="input_control"
            placeholder="Password Confirm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordTwo(e.target.value)
            }
          />
          <label className="classError">{error}</label>

          <button type="submit" className="btnRegister">
            Registrar-se
          </button>
          <p className="log">
            Já possui uma conta? <a href="/Login">Faça Login</a>
          </p>
        </form>
      </div>
      <div className="image">
        <img src={Logo} alt="Image Compass" />
      </div>
    </div>
  );
};

export default Register;
