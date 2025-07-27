import React from "react";
import "./App.css";
import Header from "./Header";
import Contactlist from "./ContactList";
import AddContact from "./AddContact";



function App() {
  const contacts =[
       {
        id:"1",
        name:"preetham",
        email:"abc@gmail.com"
       },
        {
        id:"1",
        name:"raj",
        email:"raj@gmail.com"
       }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <Contactlist list={contacts} />
    </div>
  );
}

export default App;
