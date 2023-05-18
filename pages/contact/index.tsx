import React from 'react'
import styles from "./Contact.module.css"

const index = () => {
  return (
    <div className={styles.contactPage}>
        <h1>Contact</h1>
        <div className={styles.hero}>
          <div className={styles.container}>
            <h1>Email Us: <a href='mailto:20dollarinsuranceproduction@gmail.com'>20DollarInsuranceProduction@gmail.com</a></h1>
          </div>
          <div className={styles.container}>
            <h1><a href="https://twitter.com/TDI_Productions" target="_blank" rel="noopener noreferrer">Twitter</a></h1>
          </div>
          <div className={styles.container}>
            <h1><a href="https://www.instagram.com/20dollarinsuranceproductions/" target="_blank" rel="noopener noreferrer">Instagram</a></h1>
          </div>
        </div>
    </div>
  )
}

export default index