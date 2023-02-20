import React, { useContext, useEffect, useState } from "react";
import logoMobile from "../assets/img/logoMobile.png";
import logoDesktop from "../assets/img/logoDesktop.png";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { types } from "../context/dataReducer";
import styles from './HeaderHome.module.css'
export function HeaderHome() {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const [user, setUser] = useState(0);
  const clear = () => {
    localStorage.clear();
    window.location = "/";
  };


  useEffect(() => {
    // console.log("-----------------------------");
    // console.log(localStorage.getItem("userLogged"));
    // console.log(JSON.parse(localStorage.getItem("userLogged")));

    if (localStorage.getItem("userLogged")) {
      setUser(JSON.parse(localStorage.getItem("userLogged")));
    }

  }, []);



  const [state, dispatch] = useContext(DataContext)
  // const { userLogged } = state
  const dataProductHandler = () => {
    dispatch({
      type: types.allProducts
    })
    localStorage.removeItem("checkIn")
    localStorage.removeItem("checkOut")
  }

  console.log("user");
  console.log(user);

  return (
    <>
      <div className={styles.container}>
        <MobileMenu />
        <div className={styles.containerLogo}>
          <img
            className={styles.imgLogoMobile}
            src={logoMobile}
            alt="Logo Digital Booking"
            onClick={() => { navigate("/"); dataProductHandler() }}
          />
          <img
            className={styles.imgLogoDesktop}
            src={logoDesktop}
            alt="Logo Digital Booking"
            onClick={() => { navigate("/"); dataProductHandler() }}
          />
        </div>



        {user !== 0 ?
          (
            <div className={styles.containerCard}>
              {user.rol === "ROLE_ADMIN" ? <p className={styles.administration} onClick={() => { navigate("/administration") }}>Administración</p> : <p className={styles.administration} onClick={() => { navigate("/mis-reservas") }}>Mis reservas</p>}
              <div className={styles.circle}>
                {user?.name.charAt(0).toUpperCase()}
                {user?.lastname.charAt(0).toUpperCase()}
              </div>
              <div className={styles.user}>
                <h4>Hola, </h4>
                <p>
                  {user?.name.charAt(0).toUpperCase() + user?.name.slice(1).toLowerCase()} {user?.lastname.charAt(0).toUpperCase() + user?.lastname.slice(1).toLowerCase()}
                </p>
              </div>
              <button onClick={clear}>X</button>
            </div>
          ) : (
            <div className={styles.containerButton}>
              {pathName !== "/register" && <button onClick={() => navigate("/register")}>Crear cuenta </button>}
              {pathName !== "/login" && <button onClick={() => navigate("/login")}>Iniciar sesión</button>}
            </div>)
        }



        {/* {localStorage.getItem('userLogged') ? (
        <div className={styles.containerCard}>
          {userLogged.rol === "ROLE_ADMIN" ? <p className={styles.administration} onClick={() => { navigate("/administration") }}>Administración</p> : <p className={styles.administration} onClick={() => { navigate("/mis-reservas") }}>Mis reservas</p>}
          <div className={styles.circle}>
            {userLogged?.name.charAt(0).toUpperCase()}
            {userLogged?.lastname.charAt(0).toUpperCase()}
          </div>
          <div className={styles.user}>
            <h4>Hola, </h4>
            <p>
              {userLogged?.name.charAt(0).toUpperCase() + userLogged?.name.slice(1).toLowerCase()} {userLogged?.lastname.charAt(0).toUpperCase() + userLogged?.lastname.slice(1).toLowerCase()}
            </p>
          </div>
          <button onClick={clear}>X</button>
        </div>
      ) : (
        <div className={styles.containerButton}>
          {pathName !== "/register" && <button onClick={() => navigate("/register")}>Crear cuenta </button>}
          {pathName !== "/login" && <button onClick={() => navigate("/login")}>Iniciar sesión</button>}
        </div>)} */}
      </div>
    </>
  );
};
// // export default HeaderHome;
