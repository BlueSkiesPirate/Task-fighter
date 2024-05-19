import styles from "./SideQuests.module.css"

function SideQuests(){
    return(
        <>
        
        <div className={styles.other_widget} id={styles.side_quests}>
        <div id={styles.side_quests_title}>Side Quests</div>
        <div id={styles.side_quests_available}>5</div>
      </div>
        </>
    )
}

export default SideQuests