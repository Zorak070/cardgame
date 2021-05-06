import React from "react";

class Card extends React.Component {

    render() {
        let click;
        if (this.props.faceUp) {
            click = false;
        } else {
            click = true
        }
        return (
            <div >
                <div onClick={click ? this.props.flip : undefined} className={`Card ${this.props.faceUp ? 'image' : 'image-blank'}`}
                    style={{ background: `url(${this.props.content.pic})` }}
                />
            </div>
        );
    }

}

export default Card;