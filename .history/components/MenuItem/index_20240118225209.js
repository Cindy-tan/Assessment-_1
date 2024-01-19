import styles from "./MenuItem.module.css"

export default function MenuItem() {
    title="",
    bgColor,
    textColor,
    tabLeft

    return (
        <>
            <div className={styles.menuItem} style={{backgroundColor: bgColor, color:textColor}}>
                {title}
            </div>
        </>
    )
}
