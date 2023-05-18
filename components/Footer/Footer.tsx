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
        <a href="https://www.youtube.com/@tdiproductions3181" target="_blank" rel="noreferrer noopener"> 
          <FontAwesomeIcon className={styles.icon} size="xs" icon={faYoutube}></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/20dollarinsuranceproductions/" target="_blank" rel="noreferrer noopener"> 
          <FontAwesomeIcon className={styles.icon} size="xl" icon={faInstagram} />
        </a>
        <a href="https://www.tiktok.com/@20dollarinsurance" target="_blank" rel="noreferrer noopener"> 
          <FontAwesomeIcon className={styles.icon} size="xl" icon={faTiktok} />
        </a>
  
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
          <a href="https://www.youtube.com/@tdiproductions3181" target="_blank" rel="noreferrer noopener"> <li>YouTube </li></a>
          <a href="https://twitter.com/TDI_Productions" target="_blank" rel="noreferrer noopener"> <li>Twitter </li></a>
          <a href="https://www.tiktok.com/@20dollarinsurance" target="_blank" rel="noreferrer noopener"> <li>TikTok </li></a>
          <a href="https://www.instagram.com/20dollarinsuranceproductions/" target="_blank" rel="noreferrer noopener"> <li>Instagram </li></a>
        </ul>
      </div>
    </div>
  )
}

export default Footer