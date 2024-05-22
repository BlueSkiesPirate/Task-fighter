import styles from "./DailyTasksPage.module.css"


export default function DailyTasks(){
    return(
        <>
        <div id={styles.TopBackground}>
            <div id={styles.TopContainer}>
                <div id={styles.TopNav}>

                </div>
                <div id={styles.MainDash}>

                    <div id={styles.DashLeft}>
                        Daily
                    </div>
                    <div id={styles.DashRight}>
                        <div id={styles.DashDate}>
                                Mon 3/17/2024
                        </div>
                        <div id={styles.CreateContainer}>
                            <div id={styles.CreateButton}>
                                Create      +
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div id={styles.BottomBackground}>

        </div>
        </>
    )
}