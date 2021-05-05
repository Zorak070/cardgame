import React from "react";
import Card from "./Card";

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Card endGame={this.props.endGame} diff={this.props.diff} />
            </div>
        );
    }
}

export default Game;