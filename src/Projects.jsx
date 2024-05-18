import styles from "./Projects.module.css"

function Projects(){
    return(
        <>
        
        
        <div id={styles.projects_container}>
      <div id={styles.project_container}>
        <div id={styles.projects_heading}>
          <h2 id={styles.project_title}>Projects</h2>
          <div id={styles.view_projects}>view</div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Projects