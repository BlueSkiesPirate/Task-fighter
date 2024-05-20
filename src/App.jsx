import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from "./assets/Pages/Home"
import TestPage from "./assets/Pages/testPage";
import Achievements from "./assets/Pages/AchievementsPage"
import Armory from "./assets/Pages/ArmoryPage"
import Battle from "./assets/Pages/BattlePage"
import DailyTasks from "./assets/Pages/DailyTasksPage"
import Projects from "./assets/Pages/ProjectsPage"
import Shop from "./assets/Pages/ShopPage"
import SideQuests from "./assets/Pages/SideQuestsPage"
import Tasks from "./assets/Pages/TasksPage"
import User from "./assets/Pages/UserPage"



function App() {
 

  return (
    <>
    <Router>
      <Routes>

        <Route path="/home" element={<Home/>}/>
        <Route path="/Achievements" element={<Achievements/>}/>
        <Route path="/Armory" element={<Armory/>}/>
        <Route path="/Battle" element={<Battle/>}/>
        <Route path="/DailyTasks" element={<DailyTasks/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/SideQuests" element={<SideQuests/>}/>
        <Route path="/Tasks" element={<Tasks/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/" element={<TestPage/>}/>
      </Routes>
    </Router>
  </>
  );
}

export default App
