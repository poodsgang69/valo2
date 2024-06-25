// import logo from './logo.svg';
import {React , useState} from 'react';
import InputForm from './components/InputForm';
import Card from './components/Card';
import Abilities from './components/Abilities';

import './App.css';

function App() {
  const [extractedData, setExtractedData] = useState({
    'agentName': "",
    'agentDescription': "",
    'agentRole': "",
    'fullPortrait': "",
    'roleIconImg': "",
    'agentFound': true,
    'abilities': {}
  });
  const [id, idSetter] = useState("");

  // console.log(extractedData.abilities);
  return (
    <>
      <InputForm stateSetter = {setExtractedData} agentIDSetter = {idSetter}/>
      <Card agentInfo = {extractedData}/>
      <Abilities uuid={id} abilities={extractedData.abilities}/>
    </>
  );
}

export default App;
