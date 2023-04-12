import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function PersonaSwiper({personas}) {

  const swiperSlides = personas.map((persona) => 
  <SwiperSlide key={persona.id} >
      <img src={persona.imageUrl} />
    </SwiperSlide>
  );
  console.log(swiperSlides);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // centeredSlides={true}
        centerInsufficientSlides={true}
        spaceBetween={30}
        modules={[Navigation, Keyboard]}
        navigation={true}
        keyboard={{
            enabled: true,
        }}
        className="mySwiper"
        // tabindex="0"
      >
          {swiperSlides}
      </Swiper>
    </>
  );
}

export default PersonaSwiper;
