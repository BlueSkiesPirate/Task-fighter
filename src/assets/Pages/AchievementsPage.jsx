import styles from "./AchievementsPage.module.css"
export default function achievements(){
    return(
        <>
    <div id={styles.topNav} >=</div>

    <div id={styles.userContainer}>

  <img id={styles.UserImage} src="task-fighter\public\vite.svg"/>
  Task_Fighter
    </div>

    <div id={styles.detailsContainer}>
        about
        <div id={styles.aboutInfoContainer}><div id={styles.aboutInfo}/></div>
        statistics
        <div id={styles.statsContainer}>
        <div id={styles.stats}>
            <hr/>
            day streak
            <hr/>
            HT
            <hr/>
            Total tasks
            <hr/>
            Rank
        </div>
        </div>
        

        <div id={styles.btnContainer}>
            <button id={styles.AchievementsBtn} className={styles.btn}>Achievements</button>
            <button id={styles.FeedbackBtn} className={styles.btn}>Feedback</button>
        </div>

    </div>

        </>
    )
}