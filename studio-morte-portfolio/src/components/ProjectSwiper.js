import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectSwiper({ images }) {
  const swiperSlides = images.map((image) => (
    <SwiperSlide key={image.id}>
      <img src={image.imageUrl} alt={image.alt} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // centeredSlides={true}
        centerInsufficientSlides={true}
        spaceBetween={15}
        modules={[Navigation, Keyboard, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{}}
      >
        {swiperSlides}
      </Swiper>
    </>
  );
}

export default ProjectSwiper;
