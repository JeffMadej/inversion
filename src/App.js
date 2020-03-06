import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Peter" lastName="Parker" Age="25" hairColor="brown" />
      <PersonCard firstName="Dead" lastName="Pool" Age="30" hairColor="black" />
      <PersonCard firstName="Doctor" lastName="Doom" Age="38" hairColor="brown" />
      <PersonCard firstName="Venom" lastName=".... " Age="?" hairColor="unknown" />
      

      
    </div>
  );
}

export default App;
