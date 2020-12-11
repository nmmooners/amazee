import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Projects from "./components/projects";

import './App.css';


const helloQuery = gql`
{
  myName
}
`;




function App() {

  /* 

    EXAMPLE

    Hello API Query

  */ 
  const {loading, error, data} = useQuery(helloQuery);
  
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const { myName } = data
  console.log(`Hello ${myName}`);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* Here we print the value of the returned API query to the page */}        
        <p>Hello {myName}</p>
        <Projects />
      </header>
    </div>
  );
}

export default App;
