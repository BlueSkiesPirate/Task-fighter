import styles from "./BattlePage.module.css"

export default function Battle(){
    return(
        <>
        <div id={styles.Background}>
            <div id={styles.NavBar}>
                MENU
            </div>
            <div id={styles.ToolsEquippedContainer}>
                <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
                <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
                <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            </div>
        </div>
        <div id={styles.BattleContainer}>
            <div id={styles.BattlesLeft}>
                <div className={styles.UnlockedBattleBtn}>Solo</div>
                <div className={styles.UnlockedBattleBtn}>Against friend</div>
            </div>
            <div id={styles.BattlesRight}>
            <div className={styles.lockedBattleBtn} id={styles.RigthFight}>Against friend</div>
            </div>
        </div>
        </>
    )
}