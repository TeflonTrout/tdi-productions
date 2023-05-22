import React, { useState } from 'react'
import styles from "./AvatarCard.module.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface AvatarProps {
    name: string;
    image: string;
    position: string;
    insta?: string;
}

const AvatarCard = (member: AvatarProps) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  return (
    <div className={styles.photoCard}>
        {imgLoaded ? null : <Skeleton className={styles.skeletonImg} />}
        <img src={member.image} alt="avatar" onLoad={() => setImgLoaded(true)}/>
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