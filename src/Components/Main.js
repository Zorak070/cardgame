import React from "react";
import Start from "./Start";
import Game from "./Game";
import Nav from "./Nav";
import End from "./End";

class Main extends React.Component {
    state = {
        showStart: true,
        showEnd: false,
        score: 0,
        diff: "easy",
        startTime: ""
    };

    handleStart = (diff, boolean) => {
        this.setState({ diff: diff, showStart: boolean });
        this.startTimer();
    };

    startTimer = () => {
        const startTime = new Date();
        this.setState({ startTime: startTime })
    }

    handleEndGame = (boolean) => {
        this.startTimer();

        if (boolean) {
            const timeTaken = (new Date() - this.state.startTime) / 1000;
            this.setState({ showEnd: boolean, score: this.state.score + 1, counter: timeTaken });
        } else {
            this.setState({ showEnd: boolean });
        }
    };
    render() {
        const { showStart, diff, score, showEnd } = this.state;
        return (
            <div>
                {showStart ? <Start start={this.handleStart} /> : null}
                {showEnd ? <End newGame={this.handleEndGame} counter={this.state.counter} /> : null}
                {!showStart && <  Nav diff={diff} score={score} />}
                {!showStart && <Game endGame={this.handleEndGame} />}
            </div>
        );
    }
}

export default Main;
