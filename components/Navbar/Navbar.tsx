import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
import { Button } from "../index"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.pageLinks}>
        <Link href="/">
          <h1>Home</h1>
        </Link>
        <Link href="/about">
          <h1>About</h1>
        </Link>
        <Link href="/films">
          <h1>Films</h1>
        </Link>
        <Link href="/shop">
          <h1>Shop</h1>
        </Link>
      </div>
      <div className={styles.logoContainer}>
        <Link href="/"><h1>TDI</h1></Link>
        {/* <Image src="/tdiTransparent.png" alt="tdi productions" className={styles.logo} fill/> */}
      </div>
      <div className={styles.socialsContainer}>
        <Link href="/contact"><Button text="Contact" color="primary" width="auto"/></Link>
      </div>
    </div>
  )
}

export default Navbar