import React, { useEffect, useState } from 'react'
import styles from "./Films.module.css"
import { getFilms } from '@/utils/utils'
import { DescriptiveCard } from '@/components';
import { FieldProps, PropType, FilmProp } from '@/types';

const Films = ({ films }:PropType) => {
  const [filmData, setFilmData] = useState<Array<any>>([]);
  
  useEffect(() => {
    if(films !== undefined){
      setFilmData(films)
    }
  }, [films])

  return (
    <div className={styles.filmPage}>
        <h1 className={styles.heading}>Previous Films</h1>
        <div className={styles.filmGrid}>
          {filmData.length > 0 ? filmData.map((film) => (
              <DescriptiveCard 
                key={film.fields.slug}
                title={film.fields.title} 
                description={film.fields.description}
                thumbnail={film.fields.thumbnail.fields.file.url}
                url={film.fields.url}
                genres={film.fields.genres}
                releaseData={film.fields.releaseDate}
                slug={film.fields.slug}
                />
          )): "Loading..."}
        </div>
    </div>
  )
}

// SERVER SIDE RENDERED DATA FETCHING
Films.getInitialProps = async () => {
  const data = await getFilms();
  return {films: data};
}
export default Films