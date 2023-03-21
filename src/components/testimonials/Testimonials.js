import React from "react";
import "./testimonials.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const dummyData = [
  {
    avatar: "Avt1",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, vel dicta postea dolorum ut, dolor omnes an nec, nam aperiri tibique conceptam id. Te elit omnium nusquam pri. Ex vide reque saepe eum. Sit ceteros facilisis referrentur an, ex eos alia porro, ut eam graece iuvaret legendos. No aperiam deterruisset has. Ex errem constituto mea. Mazim harum iracundia nec eu, nam prompta tibique voluptatibus et.",
  },
  {
    avatar: "Avt2",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, vel dicta postea dolorum ut, dolor omnes an nec, nam aperiri tibique conceptam id. Te elit omnium nusquam pri. Ex vide reque saepe eum. Sit ceteros facilisis referrentur an, ex eos alia porro, ut eam graece iuvaret legendos. No aperiam deterruisset has. Ex errem constituto mea. Mazim harum iracundia nec eu, nam prompta tibique voluptatibus et.",
  },
  {
    avatar: "Avt3",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, vel dicta postea dolorum ut, dolor omnes an nec, nam aperiri tibique conceptam id. Te elit omnium nusquam pri. Ex vide reque saepe eum. Sit ceteros facilisis referrentur an, ex eos alia porro, ut eam graece iuvaret legendos. No aperiam deterruisset has. Ex errem constituto mea. Mazim harum iracundia nec eu, nam prompta tibique voluptatibus et.",
  },
  {
    avatar: "Avt4",
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, vel dicta postea dolorum ut, dolor omnes an nec, nam aperiri tibique conceptam id. Te elit omnium nusquam pri. Ex vide reque saepe eum. Sit ceteros facilisis referrentur an, ex eos alia porro, ut eam graece iuvaret legendos. No aperiam deterruisset has. Ex errem constituto mea. Mazim harum iracundia nec eu, nam prompta tibique voluptatibus et.",
  },
];

const articleGeneretor = dummyData.map(({ avatar, name, review }, index) => {
  return (
    <SwiperSlide key={index} className="testimonial">
      <div className="client__avatar">
        <img src={avatar} alt="Avatar One" />
      </div>
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
