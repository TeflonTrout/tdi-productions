import React from 'react'
import styles from "./AvatarCard.module.css"

interface AvatarProps {
    name: string;
    image: string;
    position: string;
    insta?: string;
}

const AvatarCard = (member: AvatarProps) => {
  return (
    <div className={styles.photoCard}>
        <img src={member.image} alt="avatar" />
        <div className={styles.infoBox}>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            {member.insta
                ?<p><a href={member.insta} target="_blank" rel="noreferrer">X</a></p>
                : null
            }
        </div>
    </div>
  )
}

export default AvatarCard