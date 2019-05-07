import React from'react';

const Weather = (props) => (
	<div>
		{ props.temp &&
			<div>
				<p>Код страны: {props.country}</p>
				<p>Температура (F): {props.temp}</p>
				<p>Восход солнца: {props.sunrise}</p>
				<p>Давление: {props.pressure}</p>
			</div>
		}
	</div>	
);
export default Weather;