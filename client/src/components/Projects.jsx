import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div>
      <h2></h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
