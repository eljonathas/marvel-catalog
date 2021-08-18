import Image from 'next/image'
import { Typography } from '@material-ui/core'
import { BoxComponent } from './styled'

import styles from './CarouselItem.module.scss'

type CarouselItemProps = {
  imageUrl: string
  title: string
  description: string
}

/**
 * CarouselItem Component
 * @param imageUrl - Image URL
 * @param title - Title
 * @param description - Description
 * @returns {React.Component}
 */

export const CarouselItem = ({
  imageUrl,
  title,
  description
}: CarouselItemProps) => {
  return (
    <BoxComponent>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.fadeBackground} />

      <div className={styles.textsContainer}>
        <Typography variant="h5">
          <strong>{title}</strong>
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </div>
    </BoxComponent>
  )
}
