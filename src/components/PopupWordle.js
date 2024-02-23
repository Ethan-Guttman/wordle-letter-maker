import React from "react";

class PopupWordle extends React.Component {
    constructor(props) {
        super(props);
        const { setWordleFound } = this.props;

        this.state = {
            word: this.props.word,
            isComplete: false,
            guessesLeft: 6,
        }

    }

    // componentDidMount() {
    //     const { setWordleFound } = this.props;

    //     setWordleFound();
    // }
    
    render() {
        const {index, setWordleFound} = this.props;

        return (
        <div className="popup" onClick={() => setWordleFound(index)}>
            cheese
        </div>);
    }
    
}

export default PopupWordle;