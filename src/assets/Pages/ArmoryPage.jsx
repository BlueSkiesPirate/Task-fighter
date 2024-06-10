import styles from "./ArmoryPage.module.css"

export default function armory(){
    return(
        <>
        <div id={styles.Background}>
            <div id={styles.NavBar}>
                MENU
            </div>
        <div id={styles.MenuBottom}>MENU_low</div>


        <div id={styles.userEquipmentContainer}>
            <div className={styles.userEquipment}>
                
     
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>


            </div>
            <div>2</div>

            <div className={styles.userEquipment}>
                
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
          
            </div>
        </div>
        </div>

        <div id={styles.ItemsContainer}>
        <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
            <div className={styles.ItContOut}><div className={styles.ItContIn}></div></div>
        </div>


        </>
    )
}