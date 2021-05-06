import React from "react";
import Card from "./Card";

class Game extends React.Component {
    constructor(props) {
        super(props)
        // const images = this.props.diff === "easy" ? easy : hard;
        // const boardImage = images.concat(images)
        //     .sort(() => Math.random() - 0.5)
        //     .map(f => {
        //         return {
        //             content: f,
        //             faceUp: false,
        //         }
        //     })
        this.state = {
            boardImage: this.props.boardImage,
            firstCard: null,
        }
    }
    flipCardTo(cardIdx, faceUp) {
        this.setState({
            boardImage: this.state.boardImage.map((f, i) => {
                if (i === cardIdx) {
                    return {
                        content: f.content,
                        faceUp: !f.faceUp,
                    }
                } else {
                    return f;
                }
            })
        }, () => {
            let checker = (arr) => arr.every(v => v.faceUp === true);
            if (checker(this.state.boardImage)) {
                this.props.endGame(true);
                this.setState({ boardImage: this.props.boardImage.sort(() => Math.random() - 0.5), firstCard: null });
            }
        })
    }

    flip(cardIdx) {
        if (this.state.firstCard === null) {
            this.setState({ firstCard: cardIdx });
        } else {
            const firstCardContent = this.state.boardImage[this.state.firstCard].content.name;
            const secondCardContent = this.state.boardImage[cardIdx].content.name;
            if (firstCardContent === secondCardContent) {
                this.setState({ firstCard: null });
            } else {
                setTimeout(() => {
                    this.flipCardTo(this.state.firstCard, false)
                    this.flipCardTo(cardIdx, false)
                    this.setState({ firstCard: null });
                }, 500)
            }
        }

        this.flipCardTo(cardIdx, !this.state.boardImage[cardIdx].faceUp)
    }
    render() {
        // console.log(this.state.boardImage, "boardImage")
        return (
            <div className="game images">
                {this.state.boardImage.map((f, i) => {
                    return (
                        <Card key={i}
                            flip={() => { this.flip(i) }}
                            content={f.content}
                            faceUp={f.faceUp}
                            endGame={this.props.endGame} diff={this.props.diff}
                        />
                    )

                })}
            </div>
        );
    }
}

export default Game;