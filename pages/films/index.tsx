import React, { useEffect, useState } from 'react'
import styles from "./Films.module.css"
import { getFilms } from '@/utils/utils'
import { DescriptiveCard } from '@/components';
import Link from 'next/link';

export interface FieldProps {
  title: string;
  thumbnail: string;
  description: string;
  releaseData: string;
  url: string;
  genres: Array<string>;
}

interface PropType {
  films: FilmProp[];
}

interface FilmProp {
  metadata: Object;
  sys: Array<object>;
  fields: FieldProps[];
}

const Films = ({ films }:PropType) => {
  const [filmData, setFilmData] = useState<Array<any>>([]);
  useEffect(() => {
    if(films !== undefined){
      setFilmData(films)
    }
  }, [films])

  return (
    <div className={styles.filmPage}>
        <h1 className={styles.heading}>Our Films</h1>
        <div className={styles.filmGrid}>
          {filmData.length > 0 ? filmData.map((film) => (
            <Link key={film.fields.slug} href={`/films/${film.fields.slug}`}>
              <DescriptiveCard 
                title={film.fields.title} 
                description={film.fields.description}
                thumbnail={film.fields.thumbnail.fields.file.url}
                url={film.fields.url}
                genres={film.fields.genres}
                releaseData={film.fields.releaseDate}
                />
            </Link>
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