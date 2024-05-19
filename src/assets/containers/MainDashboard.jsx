import styles from './MainDashboard.module.css'
import exp from './exp.png'

function MainDashboard(){

    return(
        <>
            <div id={styles.main_dashboard}>
      <div id={styles.dash}>
        <div id={styles.dash_left}>
      <div id={styles.xp_progress} style={{height: "40%"}}></div>  <img id={styles.expImg} src={exp}/>
        </div>
          <div id={styles.dash_middle}>
          <div className={styles.dash_middle_container}><img id={styles.healthImg} src="https://pngimg.com/uploads/heart/heart_PNG51337.png"></img></div>
          <div className={styles.dash_middle_container}><img id={styles.coinImg} src="https://th.bing.com/th/id/R.e4812c62116f9546dd39b8cdedc5d408?rik=bqjStRpBw6ffbg&pid=ImgRaw&r=0"/></div>
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