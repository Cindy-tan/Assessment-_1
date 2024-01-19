import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <header>
                <h1>Dashboard</h1>
                <Image src="/images/bell.png" alt="bell" width={100}/>
                <p>Friday</p>
            </header>
        </>
    )
}