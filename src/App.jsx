import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Card from  './Components/Card.jsx'
import './card.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= "app-container">

        {/* card */}
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
        

        <div className = 'list-container'>

        </div>

        <div className = "navigation">

        </div>     
        

      </div>
        
    </>
  )
}

export default App
