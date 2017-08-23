import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  //renders weather for one city
  renderWeather(cityData){
    const name = cityData.city.name;

    //list of temperatures as doubles
    const kelvins = cityData.list.map(weather=>weather.main.temp);
    const temps = _.map(kelvins, (temp) => temp - 273 );
    const press = cityData.list.map(weather=>weather.main.pressure);
    const hums = cityData.list.map(weather=>weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="C"/></td>
        <td><Chart data={press} color="green" units="hPa"/></td>
        <td><Chart data={hums} color="black" units="%"/></td>
      </tr>
    );
  }

  render(){
    return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
    );
  }
}

//function mapStateToProps(state){
//  return { weather: state.weather };

//rewritten in ES6...
function mapStateToProps( {weather} ){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
