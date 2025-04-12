import React from "react";
import { useParams, useLocation } from "react-router-dom";

const DetailView = () => {
  const { date } = useParams();
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return <p>No data found. Try going back and clicking again.</p>;
  }

  return (
    <div style={{
      margin: "auto",
      padding: "2rem",
      maxWidth: "500px",
      border: "1px solid #ccc",
      borderRadius: "12px",
      color:"black",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center"
  
    }}>
      <h2>Weather Details for {date}</h2>
      <p><strong>Temperature:</strong> {data.temp}°F</p>
      <p><strong>Humidity:</strong> {data.humidity}%</p>
      <p><strong>Windspeed:</strong> {data.windspeed} mph</p>
    </div>
  );
};

export default DetailView;
