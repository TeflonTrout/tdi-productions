import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import { Button, SimpleCard } from '@/components'
import { Carousel } from "react-responsive-carousel"
import { getFilms } from '@/utils/utils'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import { PropType } from '@/types'

const Home = ({ films }:PropType) => {
  const [newFilms, setNewFilms] = useState<Array<any>>([]);
  
  useEffect(() => {
    if(films !== undefined){
      setNewFilms(films.slice(0,3))
    }
  }, [films])

  return (
    <>
      <div style={{width: '99vw', display: 'flex', justifyContent: "center"}}>
        <Carousel 
          infiniteLoop={true}
          interval={8000}
          showArrows={false} 
          showStatus={false} 
          autoPlay={true} 
          showThumbs={false} 
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {display: "inline-block", cursor: "pointer", margin: "0 20px 0 20px", justifyContent: "center", backgroundColor: "grey", width: "100px", height: "10px", borderRadius: "5px" };
            const style = isSelected
            ? { ...defStyle, backgroundColor: "white" }
            : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
              </span>
            );
          }}
          className={styles.carousel}>
          <div>
            <img src="/thumbnails/insideTheTent.png" />
          </div>
          <div>
            <img src="/thumbnails/pigs.jpg" />
          </div>
          <div>
            <img src="/thumbnails/confinement.jpg" />
          </div>
        </Carousel>
      </div>
      <div className={styles.releaseHero}>
        <h1>Latest Releases</h1>
        <div className={styles.cardGrid}>
          {newFilms.map((film) => (
            <SimpleCard key={film.fields.slug} title={film.fields.title} image={film.fields.thumbnail.fields.file.url}/>
          ))}
        </div>
        <Link href="/films">
          <Button text='View More' color='primary' width='auto'/>
        </Link>
      </div>
      <div className={styles.aboutHero}>
        <div className={styles.logoContainer}>
          <img src="/tdiLogo.png" alt="tdi productions"/>
        </div>
        <div className={styles.container}>
          <h2>TDI Productions</h2>
          <h1>Twenty Dollar Insurance</h1>
          <p>TDI Productions is a group of friends who share a passion for filmmaking and specialize in creating high-quality short horror films. With a focus on storytelling and attention to detail, we aim to leave a lasting impression on audiences with our immersive and chilling cinematic experiences.</p>
          <Button text="View Films" color='primary' width='auto' />
        </div>
      </div>
    </>
  )
}

// SERVER SIDE RENDERED DATA FETCHING
Home.getInitialProps = async () => {
  const data = await getFilms();
  return {films: data};
}
export default Home