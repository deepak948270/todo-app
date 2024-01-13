import React from 'react'
import styles from '../styles/Container.module.css'

const Container = (props) => {
  return (
    <div className={styles.myContainer}>
        {props.children}
    </div>
  )
}

export default Container