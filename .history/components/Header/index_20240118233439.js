import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <>
            <header>
                <h1>Dashboard</h1>
                <div>
                <Image src="/images/bell.png" alt="bell" width={25} height={25}/>
                <p>Friday</p></div>
            </header>
        </>
    )
}