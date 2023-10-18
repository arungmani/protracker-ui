import React, { useState, useEffect } from "react";
import ProjectDataService from "../services/ProjectDataService";
import IProjectData from '../types/Project';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProTrackerMenu from './ProTrackerMenu';
const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Array<IProjectData>>([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    ProjectDataService.getAll()
      .then((response: any) => {
        if (Array.isArray(response.data.data)) {
          setProjects(response.data.data);
        } else {
          // Handle the case when response.data is not an array
          console.error("Data is not in the expected format.");
        }
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  return (
    <div>
    <ProTrackerMenu />
<Table celled style={{ 'width': '50%', 'margin-left': '20%', 'margin-top':'10%'  }}>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Project ID</Table.HeaderCell>
    <Table.HeaderCell>Project Name</Table.HeaderCell>
    <Table.HeaderCell>Emirate</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  {projects.map(item => (
    <Table.Row key={item._id}>
       <Table.Cell>{item.projectId}</Table.Cell>
      <Table.Cell>{item.projectName}</Table.Cell>
      <Table.Cell>{item.emirate}</Table.Cell>
    </Table.Row>
  ))}
</Table.Body>

<Table.Footer>
  <Table.Row>
    <Table.HeaderCell colSpan="3">
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon>
          <Icon name="chevron left" />
        </Menu.Item>
        <Menu.Item as="a">1</Menu.Item>
        <Menu.Item as="a">2</Menu.Item>
        <Menu.Item as="a">3</Menu.Item>
        <Menu.Item as="a">4</Menu.Item>
        <Menu.Item as="a" icon>
          <Icon name="chevron right" />
        </Menu.Item>
      </Menu>
    </Table.HeaderCell>
  </Table.Row>
</Table.Footer>
</Table>
</div>
  );
};

export default ProjectList;