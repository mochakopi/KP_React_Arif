import myPhoto from "../assets/img/me.jpeg";
import aboutInfo from '../data/aboutData.json';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src={myPhoto}
              alt="My Photo"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "200px" }}
            />
          </div>
          <div className="col-lg-8">
            <div className="text-center text-lg-start">
              <h2>Arif Setiawan</h2>
              <div className="subheading mb-4">Backend Developer</div>
              <p>
                Hi! I&apos;m Arif Setiawan, a Backend Developer based in Bandar
                Lampung, Indonesia. I have a passion for web development and
                love to create for web and mobile devices. But I also have a lot
                of experience in the field of mobile application development.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span>
                <i className="fas fa-briefcase"></i> Work Experience
              </span>
            </h4>
            <ul className="timeline">
              {aboutInfo.workExperience.map((experience, index) => (
                <li key={index}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={experience.appLink}
                  >
                    {experience.application}
                  </a>
                  <div className="subheading">{experience.title}</div>
                  <span>{experience.date}</span>
                  <p>{experience.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
