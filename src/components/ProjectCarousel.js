import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import "./ProjectCarousel.css";


const projectData = [
  {
      title: "Portfolio",
      description: "hahahah",
      imageUrl: "images.png", // Import your project image
      projectLink: "https://project1link.com", // Add your project link
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      imageUrl: "images.jpg", // Import your project image
      projectLink: "https://project2link.com", // Add your project link
    },

{
  title: 'Krishna',
  description: 'Description of Project 1',
  imageUrl: 'image.jpg', // Replace with the URL or path to your image
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
       <h2>Projects</h2>
       <div className="project-carousel">
        <Carousel> 
      {projectData.map((project, index) => (
        <Carousel.Item interval={1500}> 
        <div key={index} className="project-item">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
              />
              
             </a>
             
        <div className="project-description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div> </div>
      </Carousel.Item>
      ))}
      </Carousel> 
      </div>
    </div>
  );
};

export default Projects;
