import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import eye from "../assets/img/iconHidePassword.png";
import { DataContext } from "../context/DataProvider.js";
// import { types } from "../context/dataReducer";
import styles from "./Login.module.css";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert";
import { parseJwt } from "../services/jwtService";

export const Login = () => {
  const [err, setErr] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [errors, setErrors] = useState("");
  const [logged, setLogged] = useState(false);
  const [verify, setVerify] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });
  const [state, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const validation = () => {
    let isValid = true;
    if (verify) {
      setVerify(false);
      if (!user.email) {
        isValid = false;
        setEmpty(true);
      }
      if (!user.pass) {
        isValid = false;
        setEmpty(true);
      }
    }
    return isValid;
  };
  const urlAuth = "http://3.21.53.216:8080/authenticate";
  const submitHandler = (e) => {
    e.preventDefault();
    if (!user.email && !user.pass) {
      Swal({
        icon: "error",
        text: "Debes completar todos los campos correctamente para iniciar sesión",
      });
      return;
    }
    fetch(urlAuth, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.pass,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          Swal({
            icon: "error",
            text: "Credenciales inválidas. Por favor intenta nuevamente.",
          });
          return;
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("jwt", JSON.stringify({ token: data.jwt }));
        const userLogged = parseJwt(data.jwt);

        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(userLogged);

        localStorage.setItem(
          "userLogged",

          JSON.stringify({
            token: data.jwt,
            id: userLogged.user_id,
            rol: userLogged.authorities[0].authority,
            name: userLogged.name,
            lastname: userLogged.last_name,
            email: userLogged.sub,
          })
        );
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <HeaderHome />
      <h1>Iniciar sesión</h1>
      {errors && !empty && !logged ? (
        <span className={styles.warning}>{errors}</span>
      ) : null}
      {err && !empty && !logged ? (
        <span className={styles.warning}>
          Por favor vuelva a intentarlo, sus credenciales son inválidas
        </span>
      ) : null}
      {empty && !logged ? (
        <span className={styles.warning}>
          Por favor complete todos los campos
        </span>
      ) : null}
      <form onSubmit={(e) => submitHandler(e)}>
        <div className={styles.container2}>
          <span>
            <label>Correo electrónico</label>
            <input
              onChange={handleChange}
              value={user.email}
              type="text"
              name="email"
            />
          </span>
          <div className={styles.container3}>
            <label>Contraseña</label>
            <input
              onChange={handleChange}
              value={user.pass}
              type={passwordType}
              name="pass"
            />
            <img
              src={eye}
              alt="Mostrar u ocultar contraseña"
              onClick={togglePassword}
            />
          </div>
          <span>
            <button
              className={styles.buttonSubmit}
              onClick={() => setVerify(true)}
              type="submit"
            >
              Ingresar
            </button>
          </span>
          <span>
            <p className={styles.otherOptionsA}>¿Aún no tenes cuenta?</p>
            <p className={styles.otherOptionsR}>
              <Link to="/register">Registrate</Link>
            </p>
          </span>
        </div>
        {logged ? <Navigate to="/" /> : null}
      </form>
      <FooterHome />
    </div>
  );
};
