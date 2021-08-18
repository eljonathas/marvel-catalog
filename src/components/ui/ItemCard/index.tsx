import Image from 'next/image'
import { Typography } from '@material-ui/core'

import { CardComponent, CardContentComponent } from './styled'
import styles from './ItemCard.module.scss'

type ItemCardProps = {
  imageUrl: string
  title: string
  startYear: number | undefined
}

/**
 * ItemCard Component
 * @param imageUrl - Image URL
 * @param title - Title of the item
 * @param startYear - Year the item was released
 * @returns {React.Component}
 */

export const ItemCard = ({ imageUrl, title, startYear }: ItemCardProps) => {
  return (
    <CardComponent>
      <div className={styles.cardImage}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.fadeBackground} />

      <CardContentComponent>
        <Typography variant="h6">{title}</Typography>
        {startYear && (
          <Typography variant="subtitle1" color="textSecondary">
            {startYear}
          </Typography>
        )}
      </CardContentComponent>
    </CardComponent>
  )
}
