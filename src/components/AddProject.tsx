import React, { useState, ChangeEvent } from "react";
import ProjectService from "../services/ProjectDataService";
import IProjectData from '../types/Project';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

const AddProject: React.FC = () => {
  const initialProjectState = {
    _id: null,
    projectName: "",
    emirate: "",
    projectId: "",
  };
  const [project, setProject] = useState<IProjectData>(initialProjectState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      projectName: project.projectName,
      projectId: project.projectId,
      emirate: project.emirate
    };

    ProjectService.create(data)
      .then((response: any) => {
        setProject({
          projectName: response.data.projectName,
          projectId: response.data.projectId,
          emirate: response.data.emirate
        });
        setSubmitted(true);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setProject(initialProjectState);
    setSubmitted(false);
  };

  return (
    <div className="add-project-container">
      {submitted ? (
        <Segment color="green" inverted>
          <Header as="h4" inverted>
            You submitted successfully!
          </Header>
          <Button color="green" onClick={newTutorial}>
            Add
          </Button>
        </Segment>
      ) : (
        <Segment>
          <Header as="h2">Add Project</Header>
          <Form>
            <Form.Field>
              <label>Project Name</label>
              <input
                type="text"
                placeholder="Project Name"
                value={project.projectName}
                onChange={handleInputChange}
                name="projectName"
              />
            </Form.Field>

            <Form.Field>
              <label>Project ID</label>
              <input
                type="text"
                placeholder="Project ID"
                value={project.projectId}
                onChange={handleInputChange}
                name="projectId"
              />
            </Form.Field>

            <Form.Field>
              <label>Emirate</label>
              <input
                type="text"
                placeholder="Emirate"
                value={project.emirate}
                onChange={handleInputChange}
                name="emirate"
              />
            </Form.Field>

            <Button color="green" onClick={saveTutorial}>
              Submit
            </Button>
          </Form>
        </Segment>
      )}
    </div>
  );
};

export default AddProject;