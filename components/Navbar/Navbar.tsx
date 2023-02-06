import Image from "next/image"
import styles from "./Navbar.module.css"
import { Button } from "../index"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pageLinks}>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Films</h1>
        <h1>Shop</h1>
      </div>
      <div className={styles.logoContainer}>
        <h1>TDI</h1>
        {/* <Image src="/tdiLogo.png" alt="tdi productions" className={styles.logo} fill/> */}
      </div>
      <div className={styles.socialsContainer}>
        <Button text="Contact" color="primary" width="auto"/>
      </div>
    </div>
  )
}

export default Navbar