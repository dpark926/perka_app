import React, {Component} from 'react';

class Submit extends Component {
  constructor () {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      positionId: '',
      explanation: '',
      projects: '',
      source: '',
      resume: '',
    }
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:3000/api/v1/perka', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: this.state.input
      })
    })
    .then( res => res.json() )
    .then( data => this.setState({
      weatherData: this.state.weatherData.concat([data]),
      addCity: !this.state.addCity,
      input: '',
      error: '',
    }))
  }

  render = () => {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="perka-form">
          <input type="text" onChange={this.handleInput} placeholder="FIRST NAME"></input>
          <input type="text" onChange={this.handleInput} placeholder="LAST NAME"></input>
          <input type="text" onChange={this.handleInput} placeholder="EMAIL"></input>
          <input type="text" onChange={this.handleInput} placeholder="POSTION ID"></input>
          <input type="text" onChange={this.handleInput} placeholder="EXPLANATION"></input>
          <input type="text" onChange={this.handleInput} placeholder="PROJECTS"></input>
          <input type="text" onChange={this.handleInput} placeholder="SOURCE"></input>
          <input type="text" onChange={this.handleInput} placeholder="RESUME"></input>
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default Submit;
