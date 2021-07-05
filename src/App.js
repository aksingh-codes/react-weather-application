import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY= "***REMOVED***";

const Container = styled.div`
  display : flex;
  flex-direction : column;
  margin: auto;
  align-items :center;
  box-shadow: 0 3px 12px 2px #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: 'Poppins', sans-serif;
`;

const AppLabel = styled.span`
  color: black;
  font-size:18px;
  font-weight: bold;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    console.log(response);
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {
        weather ?
        <WeatherComponent weather={weather} /> :
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      }
    </Container>
  );
}

export default App;
