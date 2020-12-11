import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { read } from 'fs';
import { idText } from 'typescript';


const allProjects = gql`
{
  allProjects{
    id,name
  }
}
`;


function Projects() {

  /*

      Use similar query syntax to the hello query in the App.tsx file to get the list of projects from that API.
      Reference: https://www.apollographql.com/docs/react/get-started/#request-data

  */

    const {loading, error, data} = useQuery(allProjects);
    // console.log(JSON.stringify(data.allProjects[1]));
    // console.log(JSON.stringify(data));
    // const {readData } = JSON.parse(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // const { allProjData } = data.allProjects[1].id;
    let allProjData = data.allProjects;

    console.log(`Hello ${allProjData}`);


    const projList = data.allProjects.map((__typename:string, id:number, name:string) =>
    <div key={id}>
      <li>{id}...{name}</li>
    </div>
    );
    
  return (
    <div className="Projects">
      <ul>{projList}</ul>
      
    </div>
  );
}

export default Projects;
