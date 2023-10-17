import React from 'react'
import styles from '../HitGallery/HitGallery.module.scss'

function Hit_Gallery() {
  return (
    <div className={styles.component}>
      <Hit_Gallery />
      <Hit_Gallery />
      <Hit_Gallery />
      <Hit_Gallery />
      <Hit_Gallery />
    </div>
  )
}

export default Hit_Gallery