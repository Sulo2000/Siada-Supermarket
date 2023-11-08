import { Swiper, SwiperSlide } from "swiper/react";
import { swiperslider } from "../../lists/swiperslider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export default function Homeswiper() {
  return (
    <div className="home__container__swiper" data-aos="fade-in-left">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => {
          let slider__overlay = document.querySelectorAll(".slider__overlay *");
          slider__overlay.forEach((item) => {
            item.style =
              "transform : translateY(-150px); opacity :0; transition : none";
            setTimeout(() => {
              item.style =
                "transform : translateY(0); opacity :1; transition : .5s";
            }, 100);
          });
        }}
        loop={true}
        grabCursor={true}
      >
        {swiperslider.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className="slider"
                style={{
                  background: `url(${slide.pic}) no-repeat center / cover fixed`,
                }}
              >
                <div className="slider__overlay">
                  <h2>{slide.name}</h2>
                  <p>{slide.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
