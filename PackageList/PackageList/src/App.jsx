import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




//Shopping list

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li>{name} <span className='checkmark'>&#10003;</span></li>;
  }
  return <li >{name}</li>;
}



 function PackingList() {
  return (
    <section className='wrapper'>
      <h1>My Shopping List </h1>
      <ul className='list'>
        <Item 
          isPacked={true} 
          name="Bread" 
        />
        <Item 
          isPacked={true} 
          name="Eggs" 
        />
        <Item 
          isPacked={false} 
          name="Coca Cola" 
        />
     
      <Item 
          isPacked={true} 
          name="Cheesecake" 
        />

         <Item 
          isPacked={false} 
          name="Tomatos" 
        />
        <Item 
          isPacked={false} 
          name="Banana" 
        />
         <Item 
          isPacked={true} 
          name="Cucumber" 
        />


      </ul>



    </section>
  );
}

export default PackingList










  

