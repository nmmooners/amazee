// import db from "../database/db.json";
import { readData, writeData } from "../database/util";

export type Project = {
  id?: number;
  name: string;
};

type Projects = Project[];

export const allProjects = () => {
  return readData() as Projects;
}

export const addProject = ({ project: { name } }: {project: Project}) => {
  const data = readData() as Projects;
  const id = data.length + 1;
  writeData([...data, { id, name }]);
  return { id , name };
}

export const updateProject = ({patch: { id, name }}: { patch: Project}) => {
  const data = readData() as Projects;

  // TODO: 
  // iterate through the projects array using a loop, 
  // find the object to update
  // apply the patch changes
  // save this modified array back to the json file
  // 
  // example of returning a mock project 
  // return { id: 0, name: 'HELLO' };

  for (let curProj of data )
  {
    if (curProj.id == id || curProj.name == name)
    {
      curProj.id = id;
      curProj.name = name;
    }
  }
  writeData(data);
  return {id, name};
}
