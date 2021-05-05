import React from "react";

class Nav extends React.Component {
    render() {
        const { diff, score } = this.props;
        return (
            <div className="navbar">
                <div className="game-title">Card Game</div>
                <div className="name">{diff}</div>
                <div className="score">Score: {score}</div>
            </div>
        );
    }
}

export default Nav;
