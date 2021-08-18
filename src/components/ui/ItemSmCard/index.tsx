import Image from 'next/image'
import { Typography } from '@material-ui/core'

import { SmCardComponent, SmCardContentComponent, SmCardTitle } from './styled'
import styles from './ItemSmCard.module.scss'

type ItemSmCardProps = {
  imageUrl: string
  title: string
  startYear: number | undefined
}

export const ItemSmCard = ({ imageUrl, title, startYear }: ItemSmCardProps) => {
  return (
    <SmCardComponent>
      <div className={styles.cardImage}>
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className={styles.fadeBackground} />

      <SmCardContentComponent>
        <SmCardTitle variant="h6">{title}</SmCardTitle>
        {startYear && (
          <Typography variant="subtitle1" color="textSecondary">
            {startYear}
          </Typography>
        )}
      </SmCardContentComponent>
    </SmCardComponent>
  )
}
