import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Button, Navbar, Footer, SimpleCard } from '@/components'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* <div className={styles.navbar}>
        <Navbar />
      </div> */}
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
          <SimpleCard title="Inside the Tent" image='/thumbnails/insideTheTent.png'/>
          <SimpleCard title="Pigs" image='/thumbnails/pigs.jpg'/>
          <SimpleCard title="Confinement" image='/thumbnails/confinement.jpg'/>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat perspiciatis vero facere aspernatur ipsum adipisci fugiat non delectus ullam tempore saepe optio soluta, laborum eveniet nihil sequi velit sed?</p>
          <Button text="View Films" color='primary' width='auto' />
        </div>
      </div>
    </>
  )
}
