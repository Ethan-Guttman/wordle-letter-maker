import React from 'react';
import { Navigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import './LetterSelect.css'

class LetterSelect extends React.Component {
  constructor(props) {
    super(props);

    // console.log("message", this.props.message);
    let words = this.props.message.split(" ");
    let toBeHidden = words.map((word) => false);
    // console.log("tobehidden", toBeHidden);
    this.state = {
        messageDissected: "", 
        confirmedPuzzles: false,
        wordArray: words,
        hiddenWords: toBeHidden,
        encryptedJson: ""
    };
  }

  toggleHiddenWord(i) {
    const { hiddenWords } = this.state;
    let newHiddenWords = hiddenWords;
    newHiddenWords[i] = !newHiddenWords[i];
    
    this.setState({hiddenWords: newHiddenWords});

  }

  createWordle() {
    const {wordArray, hiddenWords} = this.state;
    
    let newWordle = {
        wordArray: wordArray,
        hiddenWords: hiddenWords
    };

    const data = CryptoJS.AES.encrypt(JSON.stringify(newWordle), "fe248eq").toString().replace('/', "bl03kBltq");

    this.setState({ encryptedJson: data });
    console.log(data);

  }
  

  render(){
    const { wordArray, hiddenWords } = this.state;
    // console.log(wordArray);

    if (this.state.encryptedJson.length > 0) {
        return <Navigate to={"letter/" + this.state.encryptedJson} />
    }

    return (
        <>
        <div className="LetterSelect">
            <br></br>
            {wordArray.length > 0 && wordArray.map((word, i) => 
                (<button className={hiddenWords[i] ? 'selected' : ""} onClick={() => this.toggleHiddenWord(i)}>
                    {word}
                </button>))
            }
        </div>
        <br></br>
        <button onClick={() => {this.createWordle()}}>
            Create Wordle Letter
        </button>
      </>
    );
  }
}

export default LetterSelect;
