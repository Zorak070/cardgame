import React from "react";
import Start from "./Start";
// import Game from "./Game";
import Nav from "./Nav";
// import End from "./End";

class Main extends React.Component {
    state = {
        showStart: true,
        showEnd: false,
        score: 0,
        diff: "easy",
    };

    handleStart = (diff, boolean) => {
        this.setState({ diff: diff, showStart: boolean });
    };

    handleEndGame = (boolean) => {
        if (boolean) {
            this.setState({ showEnd: boolean, score: this.state.score + 1 });
        } else {
            this.setState({ showEnd: boolean });
        }
    };
    render() {
        const { showStart, diff, score, showEnd } = this.state;
        return (
            <div>
                {showStart ? <Start start={this.handleStart} /> : null}
                {/* {showEnd ? <EndGame newGame={this.handleEndGame} /> : null} */}
                {!showStart && <  Nav diff={diff} score={score} />}
                {/* <Game endGame={this.handleEndGame} /> */}
            </div>
        );
    }
}

export default Main;
