import styles from "./DailyTasksPage.module.css"
import CreateTask from "../containers/CreateTask"
import React, {useState,useEffect} from "react"
import {db} from '../firebase-config.js'
import {collection, getDocs} from "@firebase/firestore"
    

export default function DailyTasks(){


const [BtnState, setBtnState] = useState(false)
const [tasks, setTasks] = useState([])
const tasksCollectionRef = collection(db, "tasks")

    function handleCreateTask(){
        setBtnState(BtnState => !BtnState)
    }
    
    let toggleClassCheck = BtnState ? styles.Display : styles.NoDisplay ;
    
    
    useEffect(() => {
        const getTasks = async () =>{
            const data = await getDocs(tasksCollectionRef)
            setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getTasks()
    },  [])

    return(
        <>
        <div id={styles.positionAbsolute}>
        <div id={styles.TopBackground}>
            <div id={styles.TopContainer}>
                <div id={styles.TopNav}>
                    <div id={styles.NavLeft}>
                    <img id={styles.menu} src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"/>
                    </div>
                    <div id={styles.NavRight}>
                        <div id={styles.PreviousBtn} className={` ${styles.TextFont}`}>
                            Previous
                        </div>
                        <div id={styles.NextBtn} className={` ${styles.TextFont}`}>
                            Next
                        </div>
                    </div>
                </div>
                <div id={styles.MainDash}>

                    <div id={styles.DashLeft} className={styles.TextFont}>
                        Daily
                    </div>
                    <div id={styles.DashRight}>
                        <div id={styles.DashDate} className={styles.TextFont}>
                                Mon 3/17/2024
                        </div>
                        <div id={styles.CreateContainer}>
                            <div id={styles.CreateButton} className={styles.TextFont} onClick={handleCreateTask}>
                                CREATE     +
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div id={styles.BottomBackground}>
{/*Tasks*/ }
            {tasks.map((task) =>{
           
                return(
                    <>
                     <div id={styles.TaskContainer}>
                <div id={styles.TaskContainerLeft}>
                    <div id={styles.TaskTitle} className={styles.TextFont}>
                        {task.title}
                    </div>
                    <div id={styles.TaskRewards}>
                        <div id={styles.MaxRewardTitle} className={styles.TextFont}>
                                Max Reward:
                        </div>
                        <div id={styles.MaxReward}>
                            <div className={`${styles.Reward} ${styles.TextFont}`} >
                               200 XP
                            </div>
                            <div className={`${styles.Reward} ${styles.TextFont}`}>
                                $ 150
                            </div>
                        </div>

                    </div>
                </div>

                <div id={styles.TaskContainerRight}>
                    <div id={styles.TaskDetails}>
                        <div id={styles.Duration}>
                            <div className={`${styles.Reward} ${styles.TextFont}`}>
                               Duration
                            </div>
                            <div className={`${styles.Reward} ${styles.TextFont}`}>
                                20 min
                            </div>
                        </div>
                        <div id={styles.Difficultycontainer} className={` ${styles.TextFont}`}>
                              <div className={styles.easy}>
                            </div> 
                             Difficulty
                        </div>
                    </div>
                    <div id={styles.TaskActivate}>
                        <button id={styles.ActivateBtn} className={` ${styles.TextFont}`}>Activate</button>
                    </div>
                </div>
            
            </div>

                    </>
                ) 
            })}
            

        </div>
        </div>
        <div id={styles.Menu} className={`${toggleClassCheck} ${styles.CreateMenu}`}> {/*toggle the create button*/} 
            <CreateTask handleCreateTask={handleCreateTask}/>
        </div>
        </>
    )
}