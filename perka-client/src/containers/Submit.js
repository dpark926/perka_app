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
      projects: [],
      source: '',
      resume: '',
    }
  }

  handleInput = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
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
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        position_id: this.state.positionId,
        explanation: this.state.explanation,
        projects: this.state.projects.split(", "),
        source: this.state.source,
        resume: this.state.resume,
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
    let names = Object.keys(this.state)
    let inputs = names.map( name => {
      return (
        <div>
          <input type="text" onChange={this.handleInput} name={name} placeholder={name}></input><br/>
          {name}: {this.state[name]}
        </div>
      )
    })
    console.log(Object.keys(this.state))

    return (
      <div>
        <form onSubmit={this.handleSubmit} id="perka-form">
          {inputs}
          <input type="submit" value="SUBMIT"></input>
        </form>
      </div>
    )
  }
}

export default Submit;
