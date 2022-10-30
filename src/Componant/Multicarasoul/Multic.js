import React from "react";
import Carousel from "react-grid-carousel";
import img10 from "../image/Carasoul img/img10.jpg";
import img11 from "../image/Carasoul img/img11.jpg";
import img3 from "../image/Carasoul img/img3.jpg";
import img4 from "../image/Carasoul img/img4.jpg";
import img5 from "../image/Carasoul img/img5.jpg";
import img6 from "../image/Carasoul img/img6.jpg";
import img7 from "../image/Carasoul img/img7.jpg";
import img8 from "../image/Carasoul img/img8.jpg";
import img9 from "../image/Carasoul img/img9.jpg";
import "./Multic.css";
const Multic = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container mt-5">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">
            <h3>We Always Stand With You</h3>
          </div>
        </div>
      </div>

      <Carousel cols={4} rows={1} gap={15} loop className="col-md-4">
      
        {
          <Carousel.Item>
            <img width="100%" src={img3} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img4} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img5} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img6} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img7} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img8} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img9} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img10} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img11} />
          </Carousel.Item>
        }
         {
          <Carousel.Item>
            <img width="100%" src={img3} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img4} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img5} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img6} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img7} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img8} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img9} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img10} />
          </Carousel.Item>
        }
        {
          <Carousel.Item>
            <img width="100%" src={img11} />
          </Carousel.Item>
        }
      </Carousel>
    </div>
  );
};

export default Multic;
