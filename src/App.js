import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "e3a3474628282dd025c5f764de04408f";

class App extends React.Component {

  state = {
  	temp: undefined,
  	city: undefined,
  	country: undefined,
  	sunrise: undefined,
  	sunset: undefined
  }

  gettingWeather = async (e) => {
  	const city = "Ulyanovsk";
  	e.preventDefault();
  	const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
	const data = await api_url.json();

	var sunrise = data.sys.sunrise;
	var date = new Date();
	date.setTime(sunrise);
	var sunrise_date = date.getHours() + ":" + date.getMinutes() + " am";

	this.setState({
		temp: data.main.temp,
		city: data.name,
		country: data.sys.country,
		sunrise: sunrise_date,
		pressure: data.main.pressure
	});
  }

  render() {
    return (
    <div className="wrapper">
    	<div className="main">
	      	<div className="container">
	      		<div className="row">
	      			<div className="col-sm-5 info">
	      				<Info />
	      			</div>
	      			<div className="col-sm-7 form">
						<Form weatherMethod={this.gettingWeather} />
				        <Weather
				        	temp={this.state.temp}
				        	city={this.state.city}
				        	country={this.state.country}
				        	sunrise={this.state.sunrise}
				        	pressure={this.state.pressure}
				        />  
				    </div>
	      		</div>
	      	</div>
	    </div>
    </div>
    );
  }
}

export default App;