import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form.js';
import Teammembers from "./components/Teammembers.js";

function App() {
const [team, setTeam] = useState([])

const teammember = (object) =>{
  setTeam([...team, object])
}

  return (
    <div className="App">
      <Form setTe={teammember}
      
      />
      <Teammembers 
      members={team}
      />
    </div>
  );
}

export default App;
