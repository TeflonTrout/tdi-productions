import { useState } from "react"
import Link from 'next/link';
import styles from './SimpleCard.module.css'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SimpleCardProps {
  title: string;
  image: string;
}

const SimpleCard = (props: SimpleCardProps) => {
  const [imageLoaded, setImageLoaded] = useState<boolean>()
  return (
    <Link href="/films">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {imageLoaded ? null : <Skeleton className={styles.imgSkeleton} width={250} height={140}/>}
          <img src={props.image} alt="preview" width="100%" onLoad={() => setImageLoaded(true)}/>
        </div>
        <h1>{props.title}</h1>
        <p>Learn more <img src="/rightArrow.png" alt="arrow"/></p>
      </div>
    </Link>
  )
}

export default SimpleCard