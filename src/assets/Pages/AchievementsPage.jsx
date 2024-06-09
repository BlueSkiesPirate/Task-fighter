import styles from "./AchievementsPage.module.css"
export default function achievements(){
    return(
        <>
        <div id={styles.topNav}>
            <img id={styles.achievementsIcon} href=""></img>
            Achievements
        </div>
        <div id={styles.AchievementsContainer}>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>
            <div className={styles.achievement}/>

        
            
        </div>
        </>
    )
}