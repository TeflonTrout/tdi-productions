import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/tdiLogo.png" alt="tdi production" width="150px"/>
        <div className={styles.socials}>
          <p>YT</p>
          <p>IG</p>
          <p>TT</p>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Films</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li>YouTube</li>
          <li>TikTok</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className={styles.linkContainer}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Films</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer