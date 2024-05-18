// import styles from 'MainDashboard.css'

function MainDashboard(){

    return(
        <>
            <div id="main_dashboard">
      <div id="dash">
        <div id="dash_left">
          <div id="xp_progress">5%</div>
        </div>
        <div id="dash_middle">
          <div className="dash_middle_container">Health</div>
          <div className="dash_middle_container">coins</div>
          <div className="dash_middle_container" id="lvl_text">
            Lvl
          </div>
        </div>
        <div id="dash_right">
          <div className="dash_right_container">
            <div id="health"></div>
          </div>
          <div className="dash_right_container" id="coin_number">
            120
          </div>
          <div className="dash_right_container" id="lvl_text">
            10
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default MainDashboard