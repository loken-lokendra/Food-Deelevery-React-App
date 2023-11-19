import React from "react";

import "../../styles/hero-section.css";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6">
              <div class="testimonial ">
                <h5 class="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 class="testimonial__title mb-4">
                  What our
                  <span> customers </span>
                  are saying
                </h2>
                <p class="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                
              </div>
              <div className="">
                <Slider/>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAvEaN34uNhqXqM_NDPJSEYlK_eX64JfquA&usqp=CAU" alt="" width="100%"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
