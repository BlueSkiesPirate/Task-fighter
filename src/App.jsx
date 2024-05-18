import TopNav from "./TopNav";
import MainDashboard from "./MainDashboard";
import DailyTasks from "./DailyTasks";
import SideQuests from "./SideQuests";
import Battle from "./Battle";
import Projects from "./Projects";


function App() {
 

  return (
    <>
<TopNav/>
<MainDashboard/>
<DailyTasks/>
<div id="other_widgets">
  <SideQuests/>
  <Battle/>
</div>
<Projects/>
  
  </>
  );
}

export default App
