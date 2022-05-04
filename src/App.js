import './App.css';

import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';


const initialValues={username:"",phoneNumber:"",gender:"NO INFO"}

function App() {
  const [info,setInfo] =useState();
 

  return (
    <div className="App">
      <FormComponent />
      <Contacts />
      
    </div>
  );
}

export default App;
