import styles from "./CreateTask.module.css"
import React, {useState} from "react"
import {db} from '../firebase-config.js'
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "@firebase/firestore"

export default function createtask({handleCreateTask}){

    const [title, setTitle] = useState("")
    const tasksCOllectionRef = collection(db, "tasks")

    const createTask = async () =>{
        handleCreateTask()
        await addDoc(tasksCOllectionRef, {title: title})
    }

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
                <input type="date" id={styles.FTitle} name="fname"/>
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Difficulty
                <div id={styles.EasyMode}>easy</div>
                <div id={styles.MediumMode}>Medium</div>
                <div id={styles.HardMode}>Hard</div>
            </div>
            <div className={`${styles.TaskConfiguration} ${styles.font}`}>
                Est.Duration
                <input type="time" id={styles.FTitle} name="fname"/>
            </div>
        </div>
        <div id={styles.BottomContainer}>
        <textarea type="text-area" id={styles.Notes} name="fname" placeholder=" Write Some Notes..."/>
        </div>
      </div>
        
        
        
        </>
    )
}