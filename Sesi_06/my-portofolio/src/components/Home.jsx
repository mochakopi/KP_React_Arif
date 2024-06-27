import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

import kotaBalam from "../assets/img/bandar_lampung.JPG";
import kotaGajah from "../assets/img/kota_gajah.jpg";

const Home = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Home</h1>
      <p>
        Hi! Everyone, Welcome to My Portfolio. Saat ini tanggal dan waktu:{" "}
        {date.toLocaleString()}
      </p>

      <Carousel className="w-100 mx-auto rounded">
        <Carousel.Item>
          <img
            className="d-block rounded w-100 animated-image"
            src={kotaBalam}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="animated-text">Kota Bandar Lampung</h3>
            <p className="animated-text">
              Kota Bandar Lampung adalah sebuah kota di Indonesia sekaligus ibu
              kota provinsi dan kota terbesar di provinsi Lampung.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded w-100 animated-image"
            src={kotaGajah}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="animated-text">
              Bundaran Gajah Tugu Adipura Bandar Lampung
            </h3>
            <p className="animated-text">
              Tugu Adipura atau dikenal juga sebagai Tugu Gajah merupakan salah
              satu ikon Kota Bandar Lampung.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
