import React from "react";
import CryptoJS from "crypto-js";

class WordleLetter extends React.Component {
    constructor(props) {
        super(props);

        console.log('here', window.location.pathname.split("/"))
        let encrypted = window.location.pathname.split("/")[2];
        console.log("encry", encrypted);
        let encryptedUnUrled = encrypted.replace("bl03kBltq", '/');
        let decrypted = CryptoJS.AES.decrypt(encryptedUnUrled, "fe248eq");
        console.log("decrypt", decrypted);


        this.state = {
            wordArray: [],
            hiddenWords : []
        }

    }

    render() {
        return (
        <>
        <h1>Here</h1>
        </>);
    }
    
}

export default WordleLetter;