import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import './assets/css/App.css';

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [city, setCity] = useState("Select City");
	const [country, setCountry] = useState("Select Country");
	const [localtime, setLocaltime] = useState(new Date());
	const [feelslike, setFeelslike] = useState("0");
	const [weatherStatus, setWeatherStatus] = useState("Select City");
	const [weatherImg, setWeatherImg] = useState("");

	const getCity = (string) => {
		if(string.length > 2) {
			setSearchValue(string)
		}
	}

	useEffect(() => {
		axios.get(`https://api.weatherapi.com/v1/current.json?key=6062122ffa814927ac9105055212308&q=${searchValue}&lang=tr`).then((res) => {
			setCity(res.data.location.name)
			setCountry(res.data.location.country)
			setLocaltime(res.data.location.localtime)
			setFeelslike(res.data.current.feelslike_c)
			setWeatherStatus(res.data.current.condition.text)
			setWeatherImg(res.data.current.condition.icon)
		})
	})

	return (
		<div className="app">
			<div className="search">
				<input onChange={(e) => getCity(e.target.value)} type="text" placeholder="Select a city" />
			</div>

			<div className="weather-infos">
				<div className="top">
					<div className="hours">
						<span className="hour"><Moment format="h:mm">{localtime}</Moment></span>
						<span className="noon-token"><Moment format="A">{localtime}</Moment></span>
					</div>
	
					<div className="region">
						<p className="city">{ city }</p>
						<p className="country">{ country }</p>
					</div>
				</div>
	
				<div className="bottom">
					<div className="weather-status">
						<div className="today">
							<img src={weatherImg} alt="{weatherStatus}" />
							<div className="details">
								<p className="day">{ weatherStatus }</p>
								<p className="centigrade">{feelslike} °</p>
							</div>
						</div>
						<div className="weather">
							weather
						</div>
						<div className="weather">
							weather
						</div>
						<div className="weather">
							weather
						</div>
						<div className="weather">
							weather
						</div>
						<div className="weather">
							weather
						</div>
						<div className="weather">
							weather
						</div>
					</div>
				</div>
			</div>      
		</div>
	);
}

export default App;