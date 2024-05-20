import TopNav from "../containers/TopNav"
import MainDashboard from "../containers/MainDashboard";
import DailyTasks from "../containers/DailyTasks";
import SideQuests from "../containers/SideQuests";
import Battle from "../containers/Battle";
import Projects from "../containers/Projects";
import styles from "./Home.module.css"


export default function Home() {
 

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

