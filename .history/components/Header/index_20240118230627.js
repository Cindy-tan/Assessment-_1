import styles from "./Header.module.css"
import Image from "next/image"

export default function Header() {
    return (
        <>
            <header>
                <h1>Dashboard</h1>
                <Image src="/images/bell.png" alt="bell" width={20} height={25}/>
                <p>Friday</p>
            </header>
        </>
    )
}