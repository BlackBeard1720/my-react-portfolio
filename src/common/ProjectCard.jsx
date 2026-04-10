import "./ProjectCard.css";

function ProjectCard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="image-container">
        <img src={src} alt={h3} className="project-image" />
      </div>

      <div className="project-content">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
