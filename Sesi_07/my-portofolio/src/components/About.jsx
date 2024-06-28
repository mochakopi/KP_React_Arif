import aboutImage from "../assets/img/me.jpeg";

const About = () => {
  return (
    <div className="container">
      <h1 className="mt-5">About</h1>
      <p>Menu ini berisi tentang saya.</p>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="row animated-text">
              <p className="text-center">
                Perkenalkan saya Arif Setiawan. Saya berdomisili di Bandar
                Lampung. Mengikuti kelas{" "}
                <b>
                  Berkarir Sebagai Web Programmer dengan React Batch 2
                  (Prakerja)
                </b>{" "}
                untuk memperdalam ilmu saya dalam dunia pemrograman.
                <br />
                Saya berharap dengan mengikuti kelas ini, saya bisa belajar
                bersama dan saling berbagi ilmu.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={aboutImage}
            alt="About Me"
            className="img-fluid rounded animated-image w-50"
          />
        </div>
      </div>
    </div>
  );
};

export default About;