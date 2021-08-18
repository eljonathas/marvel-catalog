import Image from 'next/image'
import { FC } from 'react'

import { Box } from '@material-ui/core'

import { ImageBoxComponent } from './styled'

import styles from './ProfileBox.module.scss'

type ProfileBoxType = {
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

export const ProfileBox: FC<ProfileBoxType> = ({
  children,
  thumbnail,
  name
}) => {
  return (
    <Box>
      <ImageBoxComponent>
        <Image
          src={
            !thumbnail || thumbnail.path.indexOf('image_not_available') !== -1
              ? '/assets/images/marvel_logo_bg.jpg'
              : thumbnail.path + `/landscape_incredible.${thumbnail.extension}`
          }
          layout="fill"
          objectFit="cover"
          alt={`${name} thumbnail`}
        />

        <div className={styles.fadeBackground} />
      </ImageBoxComponent>

      {children}
    </Box>
  )
}
