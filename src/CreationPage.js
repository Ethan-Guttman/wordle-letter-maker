import logo from './logo.svg';
import './CreationPage.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function CreationPage() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Wordle Letter Maker
        </h1>
        
      </header>
      <div className="Letter-creation">
        Simply type the letter here and press the button to confirm the letter before proceeding below
        <br></br>
        <textarea placeholder="">
        </textarea>
        <br></br>
        <button>
          Confirm
        </button>
      </div>

      

    </div>
  );
}

export default CreationPage;
