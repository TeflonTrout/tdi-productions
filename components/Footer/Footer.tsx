import { useState } from "react"
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"

const Footer = () => {
  const [hover, setHover] = useState<string>("");
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/tdiLogo.png" alt="tdi production" width="150px"/>
        <div className={styles.socials}>
          <FontAwesomeIcon className={styles.icon} size="xs" icon={faYoutube}  />
          <FontAwesomeIcon className={styles.icon} size="xs" icon={faInstagram} />
          <FontAwesomeIcon className={styles.icon} size="xs" icon={faTiktok} />
        </div>
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/films">Films</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li>YouTube</li>
          <li>Twitter</li>
          <li>TikTok</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer