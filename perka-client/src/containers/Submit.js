import React, {Component} from 'react';
// import FileBase64 from './react-file-base64.js';

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
      // files: [],
    }
  }

  // getFiles(files){
  //   this.setState({
  //     files: files
  //   })
  // }

  // convertToBase64 = () => {
  //   //Read File
  //   var selectedFile = document.getElementById("inputFile").files;
  //   //Check File is not Empty
  //   if (selectedFile.length > 0) {
  //       // Select the very first file from list
  //       var fileToLoad = selectedFile[0];
  //       // FileReader function for read the file.
  //       var fileReader = new FileReader();
  //       var base64;
  //       // Onload of file read the file content
  //       fileReader.onload = function(fileLoadedEvent) {
  //           base64 = fileLoadedEvent.target.result;
  //           // Print data in console
  //           console.log(base64);
  //       };
  //       // Convert data to base64
  //       fileReader.readAsDataURL(fileToLoad);
  //   }
  // }

  handleInput = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch('https://api.perka.com/1/communication/job/apply', {
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
        resume: this.state.files,
      })
    })
    .then( res => res.json() )
    .catch( (error) => console.log(error.response))
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
    // console.log(Object.keys(this.state))

    return (
      <div>
        <form onSubmit={this.handleSubmit} id="perka-form">
          {inputs}
          {/* <p className="text-center"> *) Try To Upload Some Image~</p>
          <FileBase64
            multiple={ true }
            onDone={ this.getFiles.bind(this) } /> */}
          <input type="submit" value="SUBMIT"></input>
        </form>

        {/* <div className="text-center">
          { this.state.files.map((file,i) => {
            return <img key={i} src={file.base64} />
          }) }
          <img src="" />
        </div>

        { this.state.files.length != 0 ?
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{ JSON.stringify(this.state.files, null, 2) }</pre>
            </div>
          </div>
        : null } */}
      </div>
    )
  }
}

export default Submit;
