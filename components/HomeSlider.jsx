'use client'

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ScrollCarousel from 'scroll-carousel-react'

function HomeSlider() {
  // var settings = {
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 4000,
  //     autoplaySpeed: 4000,
  //     cssEase: "linear"
  //   };
  return (
    <ScrollCarousel autoplay smartSpeed speed={7} className='slider'>
      <div className="card-3">
        <i className="ph-fill ph-quotes" />
        <p>
          If you can discover what it is about a shortcut or simplification that allows its user to
          take it for granted, you are then prepared to innovate.
        </p>
      </div>
      <div className="card-3">
        <i className="ph-fill ph-quotes" />
        <p>We are cognitively limited creatures.The world is more complex than we can cognize.</p>
      </div>
      <div className="card-3">
        <i className="ph-fill ph-quotes" />
        <p>
          Insight comes from asking questions. Serendipity comes from preparedness. Ask questions to
          be prepared.
        </p>
      </div>
      <div className="card-3">
        <i className="ph-fill ph-quotes" />
        <p>How the serendipity happened is key to understanding how to deploy its result</p>
      </div>
      <div className="card-3">
        <i className="ph-fill ph-quotes" />
        <p>
          We depend on simplifications in order to cope. But we are the agents creating those same
          simplifications.
        </p>
      </div>
    </ScrollCarousel>
  )
}

export default HomeSlider
