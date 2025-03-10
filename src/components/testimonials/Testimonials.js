import React from "react";
import "./testimonials.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const dummyData = [
  {
    avatar: "Avt1",
    name: "Or Malchi",
    review:
      "Ron is a true professional, he helped me build my website in the most professional way I've ever seen. He was free and available to me and my wishes throughout the entire work with him, and offered great suggestions for improvement, highly recommend!",
  },
  {
    avatar: "Avt2",
    name: "Shachar Press",
    review:
      `Working with Ron is very pleasant, available and able to provide solutions
      Even after several months he sent me a screenshot of an action I forgot how to do
      He has a wide knowledge of website development and even when I needed something complicated that I wanted, he searched for it and implemented it on the website.
      My site in terms of Google optimization is good and it is constantly progressing even when I don't invest in it.
      
      It is recommended to work with him as a person and as a professional.`,
  },
];

const articleGeneretor = dummyData.map(({ avatar, name, review }, index) => {
  return (
    <SwiperSlide key={index} className="testimonial">

      <h5 className="client__name">{name}</h5>
      <small className="client__review">{review}</small>
    </SwiperSlide>
  );
});

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {articleGeneretor}
      </Swiper>
    </section>
  );
};

export default Testimonials;
