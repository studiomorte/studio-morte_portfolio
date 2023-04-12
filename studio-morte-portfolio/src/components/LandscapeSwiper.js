import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function LandscapeSwiper({ images }) {
	const swiperSlides = images.map((image) => (
		<SwiperSlide key={image.id}>
			<img src={image.imageUrl} />
		</SwiperSlide>
	));
	console.log(swiperSlides);

	return (
		<>
			<Swiper
				slidesPerView={"auto"}
				// centeredSlides={true}
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

export default LandscapeSwiper;
