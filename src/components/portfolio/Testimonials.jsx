import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { TestimonialsData } from "../../data";
import TestiBox from "./TestiBox";
const Testimonials = () => {
  return (
    <div className="testimonials section-padding">
      <div className="container">
        <div className="main-heading">testimonials</div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="py-5"
        >
          {TestimonialsData.map((testiItem) => {
            return (
              <SwiperSlide key={testiItem.id}>
                <TestiBox testiItem={testiItem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
