import styles from "./ShopPage.module.css"

export default function Shop(){
    return(
        <>
        
        <div id={styles.pageheader}>
            Shop
        </div>
        <div id={styles.navBarContainer}>
            Avatar customize
        </div>
        <div id={styles.availableShopItemsContainer}>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div>
            <div className={styles.item}>0</div> 
            <div className={styles.item}>0</div>
        </div>
        </>
    )
}