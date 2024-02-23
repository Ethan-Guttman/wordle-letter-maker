import logo from './logo.svg';
import React from 'react';
import './CreationPage.css';
import LetterSelect from './components/LetterSelect';


class CreationPage extends React.Component {
  constructor() {
    super();
    this.state = {message: "", messageConfirmed: false};
  }

  processMessage() {

  }

  setMessageConfirmed() {


    this.setState({messageConfirmed: true});
  }

  render(){
    const { message, messageConfirmed } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            Wordle Letter Maker
          </h1>
          
        </header>
        <div className="Letter-creation">
          {!messageConfirmed && (<>Simply type the letter here and press confirm
          <br></br>
          <textarea autofocus="autofocus" ref="letterTextArea" value={this.state.message} id="letterText" placeholder="" onChange={(event)=>{this.setState({ message: event.target.value })}}>
          </textarea>
          <br></br></>)}
          {!messageConfirmed && (<button onClick={() => {this.setMessageConfirmed()}}>
            Confirm
          </button>)}
        </div>


        {message.length > 1 && messageConfirmed && (
          <div className="Letter-creation">
            Select words to hide
            <LetterSelect message={this.state.message} />
          </div>)}
        

      </div>
    );
  }
}

export default CreationPage;
