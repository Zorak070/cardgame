import React from "react";

class Start extends React.Component {
    state = {
        name: "",
        diff: "easy"
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleClick = (e) => {
        e.preventDefault();
        this.props.start(this.state.diff, false);
    };
    render() {
        return (
            <div className="wrapper">
                <div className="login">
                    <form>
                        <label className="form-text text-muted">
                            Welcome
                         </label>
                        <div className="form-group">
                            <label>Choose difficulty</label>
                            <select name="diff" value={this.state.diff}
                                className="form-control" onChange={this.handleChange}>
                                <option name="diff" value="easy" key="easy">Easy</option>
                                <option name="diff" value="hard" key="hard">Hard</option>
                            </select>
                        </div>
                        <button onClick={this.handleClick} className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Start;