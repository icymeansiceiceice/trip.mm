
import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';



function App() {

  let [show,setShow] = useState(true);

  return (
    <>
      <button onClick={()=> setShow(false)}>hide trips</button>
      {show && <TripList />}
    </>
  );
}

export default App;
