import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import menuContraido from "../assets/img/menuContraido.png";
import styles from './MobileMenu.module.css';
import  iconFacebook  from "../assets/img/iconFacebookDark.png";
import  iconLinkedin  from "../assets/img/iconLinkedinDark.png";
import  iconTweet  from "../assets/img/iconTweetDark.png";
import  iconIg  from "../assets/img/iconIgDark.png";


		const clear = () => {
			sessionStorage.clear();
			window.location.reload();
		};
  
  const MobileMenu =()=>{   

	const navigate = useNavigate()

	const [user, setUser] = useState(0);

	const pathName = window.location.pathname;

	useEffect(() => {
		if (localStorage.getItem("userLogged")) {
			setUser(JSON.parse(localStorage.getItem("userLogged")));
		}
  }, []);


	const navigate = useNavigate()

	const [user, setUser] = useState(0);
	const [ stateMenu, setStateMenu] = useState(false)

	const pathName = window.location.pathname;

	useEffect(() => {
		if (localStorage.getItem("userLogged")) {
			setUser(JSON.parse(localStorage.getItem("userLogged")));
		}
  }, []);


		const showMenu = () => {
			if (!stateMenu) {
				console.log('show true')
				document.getElementById('mobileMenuDB').style.display = 'block'
			} else {
				console.log('show false')
				document.getElementById('mobileMenuDB').style.display = 'none'
			}
		} 

		const handleLateralMenu = () => {
				setStateMenu(stateMenu ? false : true)
				showMenu()
			}


    return(
			<>



				<a className={styles.burgerIcon} id='burgerIcon'onClick={() => handleLateralMenu()} href>
				<img src={menuContraido} alt='Menú' />
				</a> 
				<div id='mobileMenuDB' className={styles.mobileMenuDB}>
				<div className={styles.headerMenu}>
										<span
											className={styles.iconClose}
											onClick={() => handleLateralMenu()}
										>X</span> 
									
									{user !== 0 ? 
									(
										<div className={styles.CardMobile}>
											<div className={styles.circle}>
													{user.name.charAt(0)}
													{user.lastname.charAt(0)}
											</div>
											<div className={styles.user}>
													<h4>Hola, </h4>
													<p>
															{user.name} {user.lastname}
													</p>
											</div>
									</div>
									)
										:
										(<h2>MENÚ</h2>)
									
									}
							</div>
							<div className={styles.contentMenu}>
									<ul>
									{user !== 0 ? (
									<>
											<div className={styles.close}>¿Deseas <span onClick={clear}>cerrar sesión</span>?</div>
											<hr className={styles.hr2}/>
											</>
									) : (

											<>
											{pathName !== "/register" && <li onClick={() => {navigate("/register") }}>Crear Cuenta</li>}
											{pathName !== "/login" && <li onClick={() => {navigate("/login")}}>Iniciar Sesión</li>}
											</>    )                        
									}
									</ul>
									<div className={styles.wrapper} >
									<img 
									src={iconFacebook} alt="Icono Facebook"/>
									<img 
									src={iconLinkedin} alt="Icono Linkedin"/>
									<img 
									src={iconTweet} alt="Icono Twitter"/>
									<img 
									src={iconIg} alt="Icono Instagram"/>
									</div>
							</div>    

									</div>
			</>

    )
}

export default MobileMenu;