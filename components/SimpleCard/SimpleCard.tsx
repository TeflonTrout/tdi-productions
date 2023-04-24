import Image from 'next/image';
import Link from 'next/link';
import styles from './SimpleCard.module.css'

interface SimpleCardProps {
  title: string;
  image: string;
}

const SimpleCard = (props: SimpleCardProps) => {
  return (
    <Link href="/films">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={props.image} alt="preview" width="100%" />
        </div>
        <h1>{props.title}</h1>
        <p>Learn more <img src="/rightArrow.png" alt="arrow"/></p>
      </div>
    </Link>
  )
}

export default SimpleCard