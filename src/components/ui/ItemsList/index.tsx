import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

import { ItemCard } from '@components/ui/ItemCard'
import { useWindowSize } from '@hooks/useWindowsSize'
import { DataTypes } from '@interfaces/DataTypes'

type ItemsListProps = {
  cardsQuantity: [number, number]
  withStartYear?: boolean
  items: Array<DataTypes>
  path: string
}

/**
 * @description Items list component
 * @param items list of items to display in the list
 * @param cardsQuantity - quantity of cards in the list for different screen sizes [desktop, mobile]
 * @param withStartYear describes the way the items list is displayed (with or without start year)
 * @param path - path to the section elements page
 * @returns {React.Component}
 */

export const ItemsList = ({
  items,
  cardsQuantity,
  withStartYear = false,
  path
}: ItemsListProps) => {
  const sizes = useWindowSize()
  const isDesktop = sizes.width ? sizes.width > 768 : false

  const settings: Settings = {
    dots: false,
    arrows: isDesktop,
    infinite: true,
    speed: 500,
    slidesToShow: isDesktop ? cardsQuantity[0] : cardsQuantity[1],
    swipeToSlide: true
  }

  return (
    <Slider {...settings}>
      {items.map(({ id, name, title, thumbnail, startYear }, index) => (
        <Link href={`/${path}/${id}`} passHref key={index}>
          <a style={{ textDecoration: 'none' }}>
            <ItemCard
              title={name || title}
              imageUrl={
                !thumbnail ||
                thumbnail.path.indexOf('image_not_available') !== -1
                  ? '/assets/images/marvel_logo_bg.jpg'
                  : thumbnail.path +
                    `/portrait_incredible.${thumbnail.extension}`
              }
              startYear={withStartYear ? startYear : undefined}
            />
          </a>
        </Link>
      ))}
    </Slider>
  )
}
