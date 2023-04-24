import React from 'react'
import styles from "./DescriptiveCard.module.css"
import { FieldProps } from '@/types'
import Link from 'next/link'
import { Button } from '../index'
import Moment from "react-moment"

const DescriptiveCard = (props:FieldProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.imgContainer}>
            <img src={props.thumbnail} alt="thumbnail" />
        </div>
        <h1>{props.title}</h1>
        <h2><Moment format="ll" style={{fontSize: "16px"}}>{props.releaseData}</Moment></h2>
        <p>{props.description}</p>
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