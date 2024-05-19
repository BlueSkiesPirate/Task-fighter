import TopNav from "./assets/containers/TopNav";
import MainDashboard from "./assets/containers/MainDashboard";
import DailyTasks from "./assets/containers/DailyTasks";
import SideQuests from "./assets/containers/SideQuests";
import Battle from "./assets/containers/Battle";
import Projects from "./assets/containers/Projects";
import styles from "./App.module.css"


function App() {
 

  return (
    <>
    <body>
    <TopNav/>
<MainDashboard/>  
<DailyTasks/>
<div id={styles.other_widgets}>
  <SideQuests/>
  <Battle/>
</div>
<Projects/>
    </body>

  
  </>
  );
}

export default App
