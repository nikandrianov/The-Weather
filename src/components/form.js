import React from 'react';

const Form = (props) => (
	<form onSubmit={props.weatherMethod}>
		<h1>Ульяновск</h1>
		<button>Получить погоду</button>
	</form>

)

export default Form;