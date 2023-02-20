import  iconFacebook  from "../assets/img/iconFacebook.png";
import  iconLinkedin  from "../assets/img/iconLinkedin.png";
import  iconTweet  from "../assets/img/iconTweet.png";
import  iconIg  from "../assets/img/iconIg.png";
import styles from "./FooterHome.module.css";

export function FooterHome(){
    return(
        <div className={styles.footerH}>
            <div className={styles.marcaRegistrada}>
                <p>©2022 Digital Booking</p>
            </div>
            <div className={styles.iconosFooter}>
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
    )
}