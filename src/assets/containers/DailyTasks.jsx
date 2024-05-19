import styles1 from "./DailyTasks.module.css"


function DailyTasks(){
    return(
        <>
          <div id={styles1.daily_tasks}>
      <div id={styles1.daily_tasks_container}>
       
        <div id={styles1.daily_tasks_left}>
          <div>Daily tasks</div>
          <div id={styles1.number_of_tasks}> <div id={styles1.tasks_number_color} style={{backgroundColor: "yellow"}}></div>3/5 tasks</div>
        </div>

        <div id={styles1.daily_tasks_middle}>
          <div id={styles1.outerCircle}>
            <div id={styles1.innerCircle}>
              60%
            </div>
          </div>
        </div> 
       
       <div id={styles1.daily_tasks_right}>
          <div id={styles1.add_tasks_btn}>+</div>
          <div id={styles1.view_tasks_btn}>
            view <br></br> tasks
          </div>
        </div>

      </div>
    </div>
        </>
    )
}

export default DailyTasks