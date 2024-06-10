import styles from "./ProjectsPage.module.css"

export default function Projects(){
    return(
        <>
        <div id={styles.mainContainer}>
            <div id={styles.topNav}>
                Projects
            </div>

            <div id={styles.projectsContainer}>

                <div id={styles.project}>
                    <div id={styles.projectLeft}>
                        <div>Wireframe</div>
                        <div id={styles.viewBtnContainer}>
                            <button id={styles.viewBtn}>View</button>
                        </div>
                    </div>
                    <div id={styles.projectRight}>
                        <div>share</div>
                        <div id={styles.percentageContainer}>
                            <div id={styles.daily_tasks_middle}>
                                <div id={styles.outerCircle}>
                                    <div id={styles.innerCircle}> 60% </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}