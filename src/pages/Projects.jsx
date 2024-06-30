import projectsData from "../data/projectsData.json";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid mt-4">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.application}</h3>
            <p>{project.description}</p>
            <a href={project.appLink} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-external-link-alt"></i> Visit Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
