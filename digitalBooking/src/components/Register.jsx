import React, { useState, useContext } from "react";
import { Data } from "../Data/User.js";
import eye from "../assets/img/iconHidePassword.png";
import { Navigate, Link } from "react-router-dom";
import { DataContext } from "../context/DataProvider.js";
import { types } from "../context/dataReducer.js";
import styles from "./Register.module.css";
import { HeaderHome } from "./HeaderHome";
import { FooterHome } from "./FooterHome";
import Swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    pass: "",
    passRepeat: "",
  });
  // const [state, dispatch] = useContext(DataContext)
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [verify, setVerify] = useState(false);
  const [created, setCreated] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  const validation = () => {
    let errors = {};
    let isValid = true;
    if (verify) {
      setVerify(false);
      if (!user.name) {
        isValid = false;
        errors.name = "Este campo es obligatorio";
      }
      if (!user.surname) {
        isValid = false;
        errors.surname = "Este campo es obligatorio";
      }
      if (!user.email) {
        isValid = false;
        errors.email = "Este campo es obligatorio";
      }
      if (user.email === Data.email) {
        isValid = false;
        errors.email = "Ese email ya existe";
      }
      if (user.email !== "undefined" && !user.email === false) {
        let at = user.email.lastIndexOf("@");
        let dot = user.email.lastIndexOf(".");

        if (
          !(
            at < dot &&
            at > 0 &&
            user.email.indexOf("@@") === -1 &&
            dot > 2 &&
            user.email.length - dot > 2
          )
        ) {
          isValid = false;
          errors.email = "Email inválido (ejemplo@mail.com)";
        }
      }
      if (!user.pass) {
        isValid = false;
        errors.pass = "Este campo es obligatorio";
      }
      if (user.pass.length < 6) {
        isValid = false;
        errors.pass = "La contraseña debe tener más de 6 caracteres";
      }
      if (!user.passRepeat) {
        isValid = false;
        errors.passRepeat = "Este campo es obligatorio";
      }
      if (user.pass !== user.passRepeat) {
        isValid = false;
        errors.passRepeat = "Las contraseñas deben ser iguales";
      }
      setErrors(errors);
      return isValid;
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const urlAuth = "http://3.21.53.216:8080/users/save";

  var data = {
    userName: user.name,
    userLastName: user.surname,
    userEmail: user.email,
    userPassword: user.pass,
    role: {
      idRole: 1,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      Swal({
        icon: "error",
        text: "Verificar campos ingresados",
      });
      return;
    }
    fetch(urlAuth, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          Swal({
            icon: "error",
            text: "Credenciales inválidas. Por favor intente nuevamente.",
          });
          return;
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("userRegis", JSON.stringify(data));
        const userRegis = data;

        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log(userRegis);

        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <HeaderHome />
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.container2}>
          <div className={styles.nameAndSur}>
            <span>
              <p className={styles.user}>Nombre</p>
              {!errors.name ? (
                <input
                  className={styles.boxesNames}
                  onChange={handleChange}
                  value={user.name}
                  type="text"
                  name="name"
                />
              ) : (
                <span>
                  <input
                    className={styles.boxesWrongNames}
                    onChange={handleChange}
                    value={user.name}
                    type="text"
                    name="name"
                  />
                  <p className={styles.errorP}>{errors.name}</p>
                </span>
              )}
            </span>
            <span>
              <p className={styles.user}>Apellido</p>
              {!errors.surname ? (
                <input
                  className={styles.boxesNames}
                  onChange={handleChange}
                  value={user.surname}
                  type="text"
                  name="surname"
                />
              ) : (
                <span>
                  <input
                    className={styles.boxesWrongNames}
                    onChange={handleChange}
                    value={user.surname}
                    type="text"
                    name="surname"
                  />
                  <p className={styles.errorP}>{errors.surname}</p>
                </span>
              )}
            </span>
          </div>
          <span>
            <p className={styles.user}>Correo electrónico</p>
            {!errors.email ? (
              <input
                className={styles.otherBoxes}
                onChange={handleChange}
                value={user.email}
                type="text"
                name="email"
              />
            ) : (
              <span>
                <input
                  className={styles.otherBoxesWrong}
                  onChange={handleChange}
                  value={user.email}
                  type="text"
                  name="email"
                />
                <p className={styles.errorP}>{errors.email}</p>
              </span>
            )}
          </span>
          <span>
            <p className={styles.user}>Contraseña</p>
            {!errors.pass ? (
              <div className={styles.block}>
                <input
                  className={styles.otherBoxes}
                  onChange={handleChange}
                  value={user.pass}
                  type={passwordType}
                  name="pass"
                />
                <img
                  alt="Mostrar u ocultar contraseña"
                  onClick={togglePassword}
                  src={eye}
                />
              </div>
            ) : (
              <div className={styles.block}>
                <input
                  className={styles.otherBoxesWrong}
                  onChange={handleChange}
                  value={user.pass}
                  type={passwordType}
                  name="pass"
                />

                <img
                  alt="Mostrar u ocultar contraseña"
                  onClick={togglePassword}
                  src={eye}
                />
                <p className={styles.errorP}>{errors.pass}</p>
              </div>
            )}
          </span>
          <span>
            <p className={styles.user}>Confirmar contraseña</p>
            {!errors.passRepeat ? (
              <input
                className={styles.otherBoxes}
                onChange={handleChange}
                value={user.passRepeat}
                type="password"
                name="passRepeat"
              />
            ) : (
              <span>
                <input
                  className={styles.otherBoxesWrong}
                  onChange={handleChange}
                  value={user.passRepeat}
                  type="password"
                  name="passRepeat"
                />
                <p className={styles.errorP}>{errors.passRepeat}</p>
              </span>
            )}
          </span>
          <span>
            <button
              className={styles.buttonSubmit}
              onClick={() => setVerify(true)}
              type="submit"
            >
              Crear cuenta
            </button>
          </span>
          <span>
            <p className={styles.otherOptionsY}>¿Ya tienes una cuenta?</p>
            <p className={styles.otherOptionsI}>
              <Link to="/login">Iniciar sesión</Link>
            </p>
          </span>
        </div>
      </form>
      {created ? <Navigate to="/" /> : null}
      <FooterHome />
    </div>
  );
};

export default Register;
