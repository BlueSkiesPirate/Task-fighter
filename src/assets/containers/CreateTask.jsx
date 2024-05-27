import styles from "./CreateTask.module.css"
import React, {useState, useEffect} from "react"
import {db} from '../firebase-config.js'
import {collection, getDocs, addDoc} from "@firebase/firestore"

export default function createtask({handleCreateTask}){

    const [title, setTitle] = useState("")
    const [dueDate, setDueDate] = useState(new Date())
    const [difficulty , setDifficulty] = useState("")
    const [duration, setDuration] = useState(0)

    const tasksCollectionRef = collection(db, "tasks")

    const createTask = async () =>{
        handleCreateTask()
        await addDoc(tasksCollectionRef, {title: title, dueDate:dueDate, difficulty:difficulty, duration:duration })
    }


    // useEffect(() => {
    //     const getTasks = async () =>{
    //         const data = await getDocs(tasksCollectionRef)
    //         setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    //     }
    //     getTasks()
    // },  [])


    return(
        <>
        
      <div id={styles.Container}>
        <div id={styles.TopContainer}>
            <div id={styles.Create} className={`${styles.font}`} onClick={() => createTask() }>
               Create
           
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Title
                <input type="text" id={styles.FTitle} onChange={(event) => {setTitle(event.target.value)}} name="fname"/>
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Due
                <input type="date" id={styles.FTitle} onChange={(event) => {setDueDate(event.target.value)}} name="fname"/>
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Difficulty
                <div id={styles.EasyMode} onClick={(event) => {setDifficulty(event.target.innerHTML)}}>easy</div>
                <div id={styles.MediumMode} onClick={(event) => {setDifficulty(event.target.innerHTML)}}>Medium</div>
                <div id={styles.HardMode} onClick={(event) => {setDifficulty(event.target.innerHTML)}}>Hard</div>
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Est.Duration
                <input type="time" id={styles.FTitle} onChange={(event) => {setDuration(event.target.value)}} name="fname"/>
            </div>
        </div>
        <div id={styles.BottomContainer}>
        <textarea type="text-area" id={styles.Notes} name="fname" placeholder=" Write Some Notes..."/>
        </div>
      </div>
        
        
        
        </>
    )
}