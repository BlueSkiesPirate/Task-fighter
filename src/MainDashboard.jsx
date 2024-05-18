import styles from './MainDashboard.module.css'

function MainDashboard(){

    return(
        <>
            <div id={styles.main_dashboard}>
      <div id={styles.dash}>
        <div id={styles.dash_left}>
          <div id={styles.xp_progress}>5%</div>
        </div>
          <div id={styles.dash_middle}>
          <div className={styles.dash_middle_container}>Health</div>
          <div className={styles.dash_middle_container}>coins</div>
          <div className={styles.dash_middle_container} id={styles.lvl_text}> Lvl </div>
        </div>
        <div id={styles.dash_right}>
          <div className={styles.dash_right_container}>
            <div id={styles.health}></div>
          </div>
          <div className={styles.dash_right_container} id={styles.coin_number}>
            120
          </div>
          <div className={styles.dash_right_container} id={styles.lvl_text}>
            10
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default MainDashboard