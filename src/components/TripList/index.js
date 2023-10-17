import React, { useEffect, useState } from 'react'
import "./index.css"

export default function TripList() {

    let[trips,setTrips] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/trips')
    .then(res => res.json())
    .then(data => setTrips(data))
    .catch(err=> console.log(err));
    },[]);


    

  return (
    <div>
        <h1>Ready to go?</h1>
        <ul>
            {trips.map((trip)=>(
                <li key={trip.id}>
                <h3>{trip.name}</h3>
                <p>{trip.price}</p>
            </li>
            ))}
            
        </ul>
    </div>
  )
}
