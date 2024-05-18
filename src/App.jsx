import TopNav from "./TopNav";
import MainDashboard from "./MainDashboard";
import DailyTasks from "./DailyTasks";
import SideQuests from "./SideQuests";
import Battle from "./Battle";
import Projects from "./Projects";
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
