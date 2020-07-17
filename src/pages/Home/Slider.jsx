import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderComponent = props => {
  const { sliderList } = props
  return (
    <Slider
      arrows={false}
      dots={false}
      autoplay={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {sliderList.map((item, idx) => {
        return (
          <a href={item.linkUrl} key={idx}>
            <img src={item.imgUrl} alt={item.title} />
          </a>
        )
      })}
    </Slider>
    
  )
}

export default SliderComponent