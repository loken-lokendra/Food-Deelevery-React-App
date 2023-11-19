import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/delivery-guy.png";
import "../styles/hero-section.css";
import "../styles/food-types.css";
import Testimonial from "../components/Testimonail/Testimonial.jsx";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span class=" crimson-text">Enjoy</span> your favorite Meal
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Qui magni delectus tenetur autem, sint veritatis!
                  </p>
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/pizzas">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={guyImg} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="pt-0">
        <div class="container">
          <div class="row">
            <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 food">
              <div class="category__item d-flex align-items-center gap-3 food1">
                <div class="category__img">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxU2mHRWgN_Ldl3qfl-2EAwEDpwJwkFya-ZK1kGJRhMchuOetC"
                    alt=""
                  />
                </div>
                <h6>FastFood</h6>
              </div>
            </div>
            <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 food ">
              <div class="category__item d-flex align-items-center gap-3 food1">
                <div class="category__img">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhkEptymSwjGwbekviUBeI53eSDuhC1NoZ8v8kXSY-IdmI6B6Y"
                    alt=""
                  />
                </div>
                <h6>Pizza</h6>
              </div>
            </div>
            <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 food">
              <div class="category__item d-flex align-items-center gap-3 food1">
                <div class="category__img">
                  <img
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHzk1kAaPqqaRXArTKEy5PW4S0IjYvwzt53NW3iFK81pe3hRIe"
                    alt=""
                  />
                </div>
                <h6>Asian Food</h6>
              </div>
            </div>
            <div class="mb-4 col-6 col-sm-6 col-md-4 col-lg-3 food">
              <div class="category__item d-flex align-items-center gap-3 food1">
                <div class="category__img">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ22g6ePIhzg3qeHfmYcQHgKCgAwpWD7HSsGk88xlKf7pETeDQf"
                    alt=""
                  />
                </div>
                <h6>Row Meat</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container">
          <div class="row">
            <div class="text-center col-lg-12">
              <h5 class="feature__subtitle mb-4 crimson-text">What we serve</h5>
              <h2 class="feature__title">Just sit back at home</h2>
              <h2 class="feature__title">
                we will <span class=" crimson-text">take care</span>
              </h2>
              <p class="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p class="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </div>
            <div class="mt-5 col-sm-6 col-md-6 col-lg-4">
              <div class="feature__item text-center px-5 py-3">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpS9rLHEdDhVF6rgzGL4QjnpZiF0xweYfrSMhHGSd78YP_5O1X"
                  alt=""
                  class="w-25 mb-3"
                />
                <h5 class=" fw-bold mb-3">Quick Delivery</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque.
                </p>
              </div>
            </div>

            <div class="mt-5 col-sm-6 col-md-6 col-lg-4">
              <div class="feature__item text-center px-5 py-3">
                <img
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxYzCox-qszHnwUSsEib1PsJEeg4evFh9lfsf6R0XejIK8DpSY"
                  alt=""
                  class="w-25 mb-3"
                />
                <h5 class=" fw-bold mb-3">Super Dine In</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque.
                </p>
              </div>
            </div>

            <div class="mt-5 col-sm-6 col-md-6 col-lg-4">
              <div class="feature__item text-center px-5 py-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaBJ-dHzkyBIXGLxirehHRjsdiOcJQ-m9ydPL-5SXy0s_iUas"
                  alt=""
                  class="w-25 mb-3"
                />
                <h5 class=" fw-bold mb-3">Easy Pick Up</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minus, doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial/>
    </Helmet>
  );
};

export default Home;
