import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";


function createCard(contacts) {
  return (
    <Card 
      name={contacts.name}
      img={contacts.imgURL}
    />
  )
}



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
        img="https://media.licdn.com/dms/image/C5603AQEOIPpjQcUb6Q/profile-displayphoto-shrink_800_800/0/1542597037878?e=2147483647&v=beta&t=EqqW7qYkANpnsPqV03K3fuPn4RSUnHe5xZmoYgdLx2A"
      />

      {contacts.map(createCard)}

      {/* <Card 
        name= {contacts[0].name}
        img= {contacts[0].imgURL}
        tel= {contacts[0].phone}
        email= {contacts[0].email}
      />
      <Card 
        name= {contacts[1].name}
        img= {contacts[1].imgURL}
        tel= {contacts[1].phone}
        email= {contacts[1].email}
      />
      <Card 
        name= {contacts[2].name}
        img= {contacts[2].imgURL}
        tel= {contacts[2].phone}
        email= {contacts[2].email}
      /> */}
    </div>
  );
}

export default App;