import styles from "./DailyTasks.module.css"


function DailyTasks(){
    return(
        <>
          <div id={styles.daily_tasks}>
      <div id={styles.daily_tasks_container}>
        <div id={styles.daily_tasks_left}>
          <div>Daily tasks</div>
          <div>3/5 tasks</div>
        </div>
        <div id={styles.daily_tasks_middle}>60%</div>
        <div id={styles.daily_tasks_right}>
          <div id={styles.add_tasks_btn}>+</div>
          <div id={styles.view_tasks_btn}>
            view <br></br> tasks
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default DailyTasks