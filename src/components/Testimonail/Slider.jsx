import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div class=" slider__content d-flex align-items-center gap-3 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffVXFgYxENiH-VLaMIoiIgkDilyO2hA9VIw&usqp=CAU" alt="" width="80px"/>
          <h6>Jhon Doe</h6>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div class=" slider__content d-flex align-items-center gap-3 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY4PolCRZG_SUGHzrbMdWczrLPDLPFjmAlXQ&usqp=CAU" alt="" width="80px"/>
          <h6>Michell</h6>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div class=" slider__content d-flex align-items-center gap-3 ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU" alt="" width="80px"/>
          <h6>Jhony</h6>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
