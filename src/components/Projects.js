import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import "./Projects.css";


const projectData = [
  {
      title: "Portfolio",
      description: "Description",
      imageUrl: "img", // Import your project image
      projectLink: "https://project1link.com", // Add your project link
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "img2", // Import your project image
      projectLink: "https://project2link.com", // Add your project link
    },

{
  title: 'Project 1',
  description: 'Description of Project 1',
  imageUrl: 'image', // Replace with the URL or path to your image
  projectLink: 'https://project1link.com',
},
{
  title: 'Project 2',
  description: 'Description of Project 2',
  imageUrl: 'project2.jpg', // Replace with the URL or path to your image
  projectLink: 'https://project2link.com',
},
// Add more project items as needed
];


const Projects = () => {
  return (
    <div className="projects">
       <h2>My Projects</h2>
      {projectData.map((project, index) => (
        <div key={index} className="project-item-display">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
              />
              
             </a>
             
        <div className="description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div> </div>
      ))} 
    </div>
  );
};

export default Projects;
