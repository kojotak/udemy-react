//axios - library for ajax requests
//similar to jQuery but without the jQuery
import axios from 'axios';

const API_KEY = 'f32bb496dede4e1a31ca375058b182b1';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

//recommended way how to re-use action names
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  //ES6 syntactic sugar for formating strings
  const url = `${ROOT_URL}&q=${city},cs`;

  //promise...
  //at first (immediately), it returns the object with type promise...
  //at second look (in middleware), it fetches the data and returns the data
  //and all because of the promises, which the middleware is aware of
  const request = axios.get(url);
  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
