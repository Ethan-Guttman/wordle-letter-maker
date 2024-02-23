import React from "react";
import CryptoJS from "crypto-js";
import './WordleLetter.css';
import PopupWordle from './../components/PopupWordle'

class WordleLetter extends React.Component {
    constructor(props) {
        super(props);

        // console.log('here', window.location.pathname.split("/"))
        // let encrypted = window.location.pathname.split("/")[2];
        // console.log("encry", encrypted);
        // let encryptedUnUrled = encrypted.replace("bl03kBltq", '/');
        // let decrypted = CryptoJS.AES.decrypt(encryptedUnUrled, "fe248eq");
        // console.log("decrypt", decrypted);


        this.state = {
            wordArray: ["heartbeat", "soul", "static", "nah", "we", "go", "to,", "future"],
            hiddenWords : [false, true, false, false, false, false, false, true],
            activeWordle: -1
        }

        this.setActiveWordle = this.setActiveWordle.bind(this);

    }

    setWordleFound = (i) => {
        const { hiddenWords } = this.state;
        const update = hiddenWords;
        update[i] = false;
        this.setState({hiddenWords: update, activeWordle: -1});
    }

    setActiveWordle = (i) => {
        this.setState({activeWordle: i});
    }

    render() {
        const { wordArray, hiddenWords, activeWordle} = this.state;

        //console.log(wordArray);

        return (
        <div className="wrapper">
            
            <div className="letter">
                {wordArray.map((word, index) => {
                    if (hiddenWords[index]) {
                        return (<><span onClick={(e) => {this.setActiveWordle(index)}} className="hidden">hidden</span>&nbsp;</>)
                    } else {
                        return (<span>{word}&nbsp;</span>)
                    }
                    
                })}
            </div>
        {/* {wordArray.map((word, index) => ({hiddenWords[index] ? (<><h1>{word}</h1>&nbsp;</>) : (<h1>{word}&nbsp;</h1>)}))} */}
        {/* {wordArray.map((word, index) => ({hiddenWords[index] == false && (<>{word}&nbsp;</>)) || (hiddenWords[index] (<><a>word</a>&nbsp;</>))})} */}
        {activeWordle !== -1 && (<PopupWordle word={wordArray[activeWordle]} index={activeWordle} setWordleFound={this.setWordleFound} />)}
        </div>);
    }
    
}

export default WordleLetter;