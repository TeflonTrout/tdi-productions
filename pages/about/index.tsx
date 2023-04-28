import { AvatarCard } from '@/components'
import React from 'react'
import styles from "./About.module.css"

const index = () => {
  return (
    <div className={styles.aboutPage}>
        <h1>About Our Team</h1>
        <div className={styles.hero}>
          <img src="/group1.jpg" alt="blooper" />
          <div className={styles.textBox}>
            <h1>Welcome</h1>
            <p>Welcome to our channel dedicated to creating high-quality short horror films! We&apos;re a small team of friends who are passionate about storytelling and the art of filmmaking. Our goal is to create immersive and chilling experiences that will leave you on the edge of your seat.</p>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.textBox}>
            <h1>Our Team</h1>
            <p>As a team, we work closely together to bring our twisted visions to life. From writing the scripts to directing and shooting the scenes, each member plays a crucial role in the filmmaking process. We believe that our friendship and close collaboration give us a unique advantage in creating films that are not only scary but also well-crafted and engaging.</p>
          </div>
          <img src="/tdiLogo.png" alt="blooper" />
        </div>
        <div className={styles.hero}>
          <img src="/tdiLogo.png" alt="blooper" />
          <div className={styles.textBox}>
            <h1>Our Channel</h1>
            <p>On our channel, you&apos;ll find a variety of short horror films that explore different sub-genres, from supernatural to psychological horror. We also love to experiment with different styles and techniques, so you can expect to see some creative and visually stunning pieces.</p>
          </div>
        </div>
        <div className={styles.hero}>
          <div className={styles.textBox}>
            <h1>How We Do Horror</h1>
            <p>Whether you&apos;re a horror enthusiast or just looking for some spine-tingling entertainment, we hope you&apos;ll enjoy our films and join us on this dark journey. Don&apos;t forget to like, comment, and subscribe to stay up-to-date with our latest releases!</p>
          </div>
          <img src="/tdiLogo.png" alt="blooper" />
        </div>
        <span></span>
        <h1 className={styles.heading}>Members</h1>
        <div className={styles.photoGrid}>
          <AvatarCard name="Michael Risnear" image ="./mike.jpg" position="Executive Director"/>
          <AvatarCard name="Nicholas Kazousky" image ="./nicholas.jpg" position="Executive Cinematographer"/>
          <AvatarCard name="Christian Herman" image ="./christian.jpg" position="Executive Producer"/>
          <AvatarCard name="Chris Risnear" image ="./chris.jpg" position="Executive Author"/>
          <AvatarCard name="J.T. Kazousky" image ="./jt.jpg" position="Head of Acting"/>
          <AvatarCard name="Kevin Lee" image ="./kevin.jpg" position="Executive Composer"/>
        </div>
    </div>
  )
}

export default index