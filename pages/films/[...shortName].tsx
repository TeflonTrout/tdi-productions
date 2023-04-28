import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "./Film.module.css"
import { getFilm } from '@/utils/utils';

const ShortName = () => {
    const [filmData, setFilmData] = useState<any>();
    const router = useRouter();
    const slug = router.query.shortName

    useEffect(() => {
      const getData = async () => {
        try {
          const data = await getFilm(slug);
          setFilmData(data)
        } catch(e) {
          console.log(e)
        }
      }
      getData();
    }, [slug])

  return (
    <div className={styles.filmPage}>
        
    </div>
  )
}

export default ShortName