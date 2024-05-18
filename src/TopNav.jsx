import styles from "./TopNav.module.css"

function TopNav(){
    return(
        <>
        
        <div id={styles.top_nav}>
      <div id={styles.greeting_conatiner}>
        Hello <br />
        Sebastian, today is <strong>Feb 23, 2024</strong>
      </div>
      <div id={styles.user_container}>
        <img
          id={styles.menu}
          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/hamburgermenu_120234.png"
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/large_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
          id={styles.user_img}
        />
      </div>
    </div>

        </>
    )
}

export default TopNav