import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

import { CarouselItem } from '@components/ui/CarouselItem'
import { useWindowSize } from '@hooks/useWindowsSize'
import { DataTypes } from '@interfaces/DataTypes'

type CarouselProps = {
  items: Array<DataTypes>
}

/**
 * Carousel component
 * @param items - List of items to be displayed in the carousel
 * @returns {React.Component}
 */

export const Carousel = ({ items }: CarouselProps) => {
  const sizes = useWindowSize()
  const isDesktop = sizes.width ? sizes.width > 768 : false

  const settings: Settings = {
    dots: false,
    arrows: isDesktop,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000
  }

  return (
    <Slider {...settings}>
      {items &&
        items.map(({ id, thumbnail, name, title, description }, index) => (
          <Link href={`/comics/${id}`} passHref key={index}>
            <a style={{ textDecoration: 'none' }}>
              <CarouselItem
                imageUrl={
                  !thumbnail ||
                  thumbnail.path.indexOf('image_not_available') !== -1
                    ? '/assets/images/marvel_logo_bg.jpg'
                    : thumbnail.path +
                      `/landscape_incredible.${thumbnail.extension}`
                }
                title={name || title}
                description={description}
              />
            </a>
          </Link>
        ))}
    </Slider>
  )
}
