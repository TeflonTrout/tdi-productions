import { useState } from 'react';
import { Navbar } from "../index"
import styles from './Carousel.module.css'

const Carousel = () => {
  const [selectedItem, setSelectedItem] = useState<string>("https://rare-gallery.com/uploads/posts/532723-godzilla-movie.jpg");

  return (
    <div className={styles.carousel} style={{backgroundImage: `url(${selectedItem})`}}>
        <Navbar />
        <div className={styles.heroNav}>
        <h1>Garbage Night</h1>
          <div className={styles.pagination}>
            <span className={selectedItem === "https://rare-gallery.com/uploads/posts/532723-godzilla-movie.jpg" ? styles.active : styles.item} onClick={() => setSelectedItem("https://rare-gallery.com/uploads/posts/532723-godzilla-movie.jpg")}></span>
            <span className={selectedItem === "https://cdn.wallpapersafari.com/64/83/QSN87G.jpg" ? styles.active : styles.item} onClick={() => setSelectedItem("https://cdn.wallpapersafari.com/64/83/QSN87G.jpg")}></span>
            {/* <span className={selectedItem === "https://rare-gallery.com/uploads/posts/532723-godzilla-movie.jpg" ? styles.active : styles.item}></span>
            <span className={selectedItem === "https://rare-gallery.com/uploads/posts/532723-godzilla-movie.jpg" ? styles.active : styles.item}></span> */}
          </div>
        </div>
    </div>
  )
}

export default Carousel