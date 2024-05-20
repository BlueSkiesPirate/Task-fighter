
import styles from "./NavBar.module.css"



export default function NavBar(){
    return(
        <>
        <div className={styles.NavBar}>
           <button className={styles.NavButton} id={styles.user}>User</button>
           <button className={styles.NavButton}>Timeline</button>
           <button className={styles.NavButton}>Shop</button>
           <button className={styles.NavButton}>Feedback</button>
           <button className={styles.NavButton}>Settings</button>
           <button className={styles.NavButton}>C</button>
        </div>
        
        </>
    )
}