import MenuItem from "../MenuItem"
import styles from "./SideNavigation.module.css"
import Image from "next/image"

export default function SideNavigation() {
    return (
        <>
            <div>
                <Image src="/images/profile.JPG" alt="profile" width={100} height={100}/>
                <h2>Cindy Tan</h2>
                <p>Digital Designer</p>
                <br/>
                <MenuItem title=""/>
            
            </div>
        </>
    )
}