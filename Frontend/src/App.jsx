import React from 'react'
import {Navbar , Home, Login_page} from "./components"
import styles from "../Style"
import './App.css'

function App() {

  return (
    <div className="App ">
    <div className=' w-full overflow-hidden ' id='Home'>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Login_page/>
     </div>
        
       <div className='bg-black-gradient'>
       </div>
            </div>  
        </div>
        <div className={`${styles.boxWidth}`}>
            </div>
    </div> 
  )
}

export default App
