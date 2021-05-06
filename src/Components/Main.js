import React from "react";
import Start from "./Start";
import Game from "./Game";
import Nav from "./Nav";
import End from "./End";
import axios from 'axios';
import { easy, hard } from "./Images/index";

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
            this.submitToJson(this.state.diff, this.state.score, timeTaken);
        } else {
            this.setState({ showEnd: boolean });
        }
    };

    submitToJson = (diff, score, time) => {
        axios.post('http://localhost:3001/scores', {
            diff: diff,
            score: score,
            timeTaken: time
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const { showStart, diff, score, showEnd } = this.state;
        const images = diff === "easy" ? easy : hard;
        const boardImage = images.concat(images)
            .sort(() => Math.random() - 0.5)
            .map(f => {
                return {
                    content: f,
                    faceUp: false,
                }
            });
        return (
            <div>
                {showStart ? <Start start={this.handleStart} /> : null}
                {showEnd ? <End newGame={this.handleEndGame} counter={this.state.counter} /> : null}
                {!showStart && <  Nav diff={diff} score={score} />}
                {!showStart && <Game endGame={this.handleEndGame} diff={diff} boardImage={boardImage} />}
            </div>
        );
    }
}

export default Main;
