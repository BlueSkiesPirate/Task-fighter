import React, { useState } from "react"
import styles from "./TopNav.module.css"

function TopNav(){

    const [time, setTime] = useState(new Date());
    const [Year, setYear] = useState();

  function formatTime(){
    let day = time.getDay()
    let year = time.getFullYear()
    let month = time.getMonth()

    let monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
   let monthName = monthArr[month]
    return `${monthName} ${day}, ${year}`
  }
    return(
        <>
        
        <div id={styles.top_nav}>
      <div id={styles.greeting_conatiner}>
        Hello <br />
        Sebastian, today is <strong>{formatTime()}</strong>
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