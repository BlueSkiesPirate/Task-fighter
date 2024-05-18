
function App() {
 

  return (
    <>
    <div id="top_nav">
      <div id="greeting_conatiner">
        Hello <br />
        Sebastian, today is <strong>Feb 23, 2024</strong>
      </div>
      <div id="user_container">
        <img
          id="menu"
          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
          id="user_img"
        />
      </div>
    </div>

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

    <div id="daily_tasks">
      <div id="daily_tasks_container">
        <div id="daily_tasks_left">
          <div>Daily tasks</div>
          <div>3/5 tasks</div>
        </div>
        <div id="daily_tasks_middle">60%</div>
        <div id="daily_tasks_right">
          <div id="add_tasks_btn">+</div>
          <div id="view_tasks_btn">
            view <br></br> tasks
          </div>
        </div>
      </div>
    </div>

    <div id="other_widgets">
      <div className="other_widget" id="side_quests">
        <div id="side_quests_title">Side Quests</div>
        <div id="side_quests_available">5</div>
      </div>
      <div className="other_widget" id="battle"></div>
    </div>

    <div id="projects_container">
      <div id="project_container">
        <div id="projects_heading">
          <h2 id="project_title">Projects</h2>
          <div id="view_projects">view</div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App
