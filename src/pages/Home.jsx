import { Carousel } from "react-bootstrap";
import imgSiger from "../assets/img/siger.jpg";
import imgGrandMercure from "../assets/img/grand_mercure.jpg";

const Home = () => {
  return (
    <div className="home">
      <h2 className="text-center">Welcome to Ruang Belajar.</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Carousel fade={true}>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={imgSiger}
                  alt="Siger Lampung"
                />
                <Carousel.Caption>
                  <h3>Siger Lampung</h3>
                  <p>
                    Siger Lampung adalah simbol kebanggaan masyarakat Lampung.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-img"
                  src={imgGrandMercure}
                  alt="Grand Mercure"
                />
                <Carousel.Caption>
                  <h3>Grand Mercure</h3>
                  <p>
                    Grand Mercure Bandar Lampung adalah hotel bintang 5 di
                    Bandar Lampung.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
