import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class UserInput extends React.Component{

 	
	constructor(props){
		super(props);
		this.state={
			city:'',
			country:'',
			weatherData:{}
		};

		this.cityChange = this.cityChange.bind(this);
   		this.countryChange = this.countryChange.bind(this);
   		this.func=this.func.bind(this);
	}


	cityChange(event){
		this.setState({city:event.target.value});
	}

	countryChange(event){
		this.setState({country:event.target.value});
	}

	func() {
		   
	   console.log(`fuck u bitch ${this.state.city}`)
	   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=c0fab9002536f116c6f58b65a8fc85c6`)
      .then(res => res.json())
      .then((res)=>{

      	
      	console.log(

      			res,
      			`city name: ${res.name}\n`,
      			`city temperature: ${res.main.temp}\n`,
      			`city max-temp: ${res.main.temp_max}\n`,
      			`city min-temp:${res.main.temp_min}\n`,
      			`city humidity% : ${res.main.humidity}\n`,
      			`city clouds: ${res.clouds.all}\n`,
      			`city weather: ${res.weather[0].description}\n`,
      			`city weather icon id: ${res.weather[0].icon}\n`,
      			`city wind degree & speed: ${res.wind.deg} ${res.wind.speed}\n`
      		)
      })
      .then((err)=>{
      	console.log(err)
      })
	}


	displayCards(){
							ReactDOM.render(<App />, document.getElementById('item1'));

							ReactDOM.render(<App />, document.getElementById('item2'));

							ReactDOM.render(<App />, document.getElementById('item3'));

							ReactDOM.render(<App />, document.getElementById('item4'));

							ReactDOM.render(<App />, document.getElementById('item5'));

							ReactDOM.render(<App />, document.getElementById('item6'));

	}


	render(){

		return(
		            <div>
		            	<div className="row center">                    
						  	
						  	
		                    <div className="input-field col s12">
		                      <input id="city" type="text" onChange={this.cityChange}></input>
		                      <label htmlFor="city">City</label>
		                    </div>

		                   
		                    <div className="input-field col s12">
		                      <input id="country" type="text" onChange={this.countryChange}></input>
		                      <label htmlFor="country">Country</label>
		                    </div>

		                   	<div>
		                   		<h6>city: {this.state.city}</h6>
		                   	</div>
		                   	<div>
		                   		<h6>country:  {this.state.country}</h6>
		                   	</div>

							 <button className="waves-effect waves-light btn" onClick={this.func}>
							 		<i className="material-icons right">
							 				send info
							 		</i>
							 		CLICK
							 </button>                  
                  		</div>

                  			{this.displayCards()}
		            </div>

			);
	}
}

export default UserInput;