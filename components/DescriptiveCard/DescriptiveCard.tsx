import React from 'react'
import styles from "./DescriptiveCard.module.css"
import Link from 'next/link'
import { Button } from '../index'
import Moment from "react-moment"
import { FieldProps } from '@/types'

const DescriptiveCard = (props:FieldProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgContainer}>
            <img src={props.thumbnail.fields.file.url} alt="thumbnail" />
        </div>
        <div className={styles.infoBox}>
          <h1>{props.title}</h1>
          <Moment format="MMM. YYYY" style={{fontSize: "16px"}}>{props.releaseData}</Moment>
          <p>{props.description}</p>
        </div>
        <div className={styles.buttonContainer}>
            <Button text="Watch" color="primary" width='lg' external={true} url={props.url}/>
            <Link href={`films/${props.slug}`}>
              <Button text="Info" color="primary" width='lg'/>
            </Link>
        </div>
    </div>
  )
}

export default DescriptiveCard