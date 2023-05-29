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

  const emailRegex = /^\S+@\S+\.\S+$/;
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
  const navigate = useNavigate();

  const isValidDateOfBirth = (dateString: string) => {
    const currentDate = new Date();

    const dateOfBirth = new Date(dateString);
    return dateOfBirth < currentDate;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !user || !birth || !email || !password || !passwordTwo) {
      setError("Preencha todos os campos!");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email inválido!");
      return;
    }
    if (!isValidDateOfBirth(birth)) {
      setError("Data de nascimento inválida!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setError(
        "A senha deve conter minimo 8 caracter. Um numero, um letra maiuscula e um caracter especial"
      );
      return;
    }
    if (password !== passwordTwo) {
      setError("As senhas não conferem!");
      return;
    } else {
      const userSaved = await MakeRequest(PATH.REGISTER, "POST", {
        name,
        user,
        birthdate: birth,
        email,
        password,
        profile_photo:
          "https://static.wixstatic.com/media/dfb70b_ca25cd8fcdfb4b1bbaaea25eede396cb~mv2.png/v1/crop/x_0,y_12,w_384,h_359/fill/w_538,h_503,al_c,lg_1,q_85,usm_0.33_1.00_0.00,enc_auto/Perfil%20an%C3%B4nimo%20exemplo.png",
      });

      if (userSaved && !userSaved.message) {
        setError("Usuário Registrado com sucesso");
      } else {
        setError("Usuário já existe");
      }
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
            className={error && !name ? "errors" : "input_control"}
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
            className={error && !user ? "errors" : "input_control"}
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
            className={error && !email ? "errors" : "input_control"}
            placeholder="Email"
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="date"
            name="birth"
            id="birth"
            value={birth}
            className={error && !birth ? "errors" : "input_control"}
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
            className={error && !password ? "errors" : "input_control"}
            placeholder="Password"
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />

          <Input
            type="password"
            name="passwordTwo"
            id="passwordTwo"
            value={passwordTwo}
            className={error && !passwordTwo ? "errors" : "input_control"}
            placeholder="Password Confirm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordTwo(e.target.value)
            }
          />
          <label className="classErrors">{error}</label>

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
