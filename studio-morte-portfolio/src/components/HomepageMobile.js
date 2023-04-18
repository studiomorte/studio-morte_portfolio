import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomepageMobile(index) {
  return (
    <>
      <div className="project-banner__mobile">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Keyboard]}
          navigation={true}
          keyboard={{ enabled: true }}
          breakpoints={{}}
          loop={true}
          id="swiper-banner"
        >
          <SwiperSlide id="slide-1">
            <div className="slide-content">
              <h2 className="brand-display">my warhammer</h2>
              <div className="slide-rectangle">
                <Link to="mywarhammer">
                  <p className="link">Explore Project</p>
                </Link>
              </div>
            </div>
            <div className="background-overlay"></div>
          </SwiperSlide>

          <SwiperSlide id="slide-2">
            <div className="slide-content">
              <h2 className="brand-display">Staunton Gallery</h2>
              <div className="slide-rectangle">
                <Link to="stauntongallery">
                  <p className="link">Explore Project</p>
                </Link>
              </div>
            </div>
            <div className="background-overlay"></div>
          </SwiperSlide>

          <SwiperSlide id="slide-3">
            <div className="slide-content">
              <h2 className="brand-display">Sustainability Vic</h2>
              <div className="slide-rectangle">
                <Link to="sustainabilityvic">
                  <p className="link">Explore Project</p>
                </Link>
              </div>
            </div>
            <div className="background-overlay"></div>
          </SwiperSlide>

          <SwiperSlide id="slide-4">
            <div className="slide-content">
              <h2 className="brand-display">Djaliny</h2>
              <div className="slide-rectangle">
                <Link to="djaliny">
                  <p className="link">Explore Project</p>
                </Link>
              </div>
            </div>
            <div className="background-overlay"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default HomepageMobile;
