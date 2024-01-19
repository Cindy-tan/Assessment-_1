import styles from "./Card.module.css"

export default function Card({
    title="default",
    description="default",
    bgColor,
    borderColor
}) 
{
    return (
        <>
            <div className={styles.card} style={{backgroundColor: bgColor, border:borderColor}}>
                {title}{description}
            </div>
        </>
    )
}