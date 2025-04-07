import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Card from  './Components/Card.jsx'
import SearchBar from './Components/searchbar.jsx'
import FilterBar from './Components/Filter.jsx';

function App() {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [list, setList] = useState(null)
  const[avgtemp, setavgTemp]= useState(0)
  const[avghumidity, setangHumidity] = useState(0)
  const [filteredList, setFilteredList] = useState([]);


  useEffect(()=>{
    const fetchWeatherData = async () =>{
      const response = await fetch(
       ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Washington?unitGroup=us&key=TED9BQVC6MKJTB6MT9EXFSJN5&contentType=json`
      )
     
      const json = await response.json()
      console.log("json Data", json)
      const temps = json.days.map(day => day.temp)
      const avg = temps.reduce((sum, temp) => sum + temp, 0)/temps.length

      const humidities = json.days.map(day => day.humidity)
      const avghumidity = humidities.reduce((sum, humidity) => sum+humidity , 0)/humidities.length
      setavgTemp(avg.toFixed(1))
      setangHumidity(avghumidity.toFixed(1))
      
      setList(json)
      setFilteredList(json.days)
      
    }
    fetchWeatherData().catch(console.error)
  },[])

  const handleFilter = (filtered) => {
    setFilteredList(filtered);
  };
  return (
      <div className= "app-container">
        {/* card */}
        <div className="card-container">
          <Card stat={list?.days?.length} title = "Total Days"/>
          <Card stat= {avgtemp} title = "Average Temprature"/>
          <Card  stat ={avghumidity} title = "Average Humidity"/>
        </div>
  
        <div className = "list-container">
        {list && <SearchBar items={list.days} onFilter={handleFilter} />}
        {list && <FilterBar items={list.days} onFilter={handleFilter} />}

            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Temperature</th>
                  <th>Humidity</th>
                  <th>Windspeed</th>
                </tr>
              </thead>
              <tbody>
              {list && filteredList.map((day) => (
              <tr key={day.datetime}>
                <td>{day.datetime}</td>
                <td>{day.temp}°F</td>
                <td>{day.humidity}%</td>
                <td>{day.windspeed} mph</td>
              </tr>
            ))}
              </tbody>
            </table>
        </div>

        <div className = "navigation-panel">
        <div className = "header"> <h1>Tempo</h1></div>
        </div>     
        

      </div>
  )
}

export default App
