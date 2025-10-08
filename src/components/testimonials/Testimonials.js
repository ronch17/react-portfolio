import React from "react";
import "./testimonials.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const dummyData = [
  {
    name: "Ronit Vinocur",
    jobTitle: "QA Engineer",
    review:
      "It has been a pleasure working with Ron. As a Fullstack Developer, he has a strong ability to build complete solutions, moving seamlessly across the application while always maintaining high quality. What I truly appreciate is that he was never defensive when receiving QA feedback—he listened carefully, was open to improvements, and actively collaborated to ensure the best outcome for the product. His professionalism, technical expertise, and team spirit make him an invaluable member of any project",
  },
  {
    name: "Or Malchi",
    jobTitle: "Website customer",
    review:
      "Ron is a true professional, he helped me build my website in the most professional way I've ever seen. He was free and available to me and my wishes throughout the entire work with him, and offered great suggestions for improvement, highly recommend!",
  },
  {
    name: "Shachar Press",
    jobTitle: "Website customer",
    review: `Working with Ron is very pleasant, available and able to provide solutions
      Even after several months he sent me a screenshot of an action I forgot how to do
      He has a wide knowledge of website development and even when I needed something complicated that I wanted, he searched for it and implemented it on the website.
      My site in terms of Google optimization is good and it is constantly progressing even when I don't invest in it.
      
      It is recommended to work with him as a person and as a professional.`,
  },
];

const articleGeneretor = dummyData.map(({ jobTitle, name, review }, index) => {
  return (
    <SwiperSlide key={index} className="testimonial">
      <h5 className="client__name">{name}</h5>
      <h6 className="client__job">{jobTitle}</h6>
      <small className="client__review">{review}</small>
    </SwiperSlide>
  );
});

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What coworkers and clients says</h5>
      <h2>Recommendations</h2>

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
