import MenuItem from "../MenuItem"
import styles from "./SideNavigation.module.css"

export default function SideNavigation() {
    return (
        <>
            <div>
                <Image src="/image/profile.JPG" alt="profile" width={50} height={50}/>
                <h2>Cindy Tan</h2>
                <p>Digital Designer</p>
                <br/>
                <MenuItem title="Experiences" bgcolor={"var(--blue)"} tex/>
            
            </div>
        </>
    )
}