import React, { useState } from "react";
import projectData from "../projectData";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardLink,
} from "reactstrap";

const Project = () => {
  const [data, setData] = useState(projectData);
  return (
    <div className="project-details">
      <div>
        <h1 style={{ textAlign: "center" }}>Project details</h1>
      </div>

      {data.map(({ id, title, description, github, projectImage }) => (
        <div key={id}>
          <Card>
            <CardImg top width="100%" src={projectImage} alt={title} />
            <CardBody>
              <CardTitle tag="h5">Project title:{title}</CardTitle>
              <CardText>Project description:{description}</CardText>
              <Button>
                <a href={github} target="_blank" rel="noreferrer">
                  Github url
                </a>
              </Button>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Project;
