import React from "react";

class PopupWordle extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            word: this.props.word,
            isComplete: false,
        }

    }

    render() {

        return (
        <div className="popup">
            cheese
        </div>);
    }
    
}

export default PopupWordle;