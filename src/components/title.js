import React from "react";
import { tooLong } from "./universal";

class Title extends React.Component {
    constructor(props) {
        super(props)
        if(this.props.text) {
            this.label = <div><div className="hash"># </div><div className="main">{tooLong(this.props.text, 32)}</div><div className="sub">{tooLong(this.props.sub, null, 1500)}</div></div>
        }
        else {
            this.label = <div><div className="gray"># </div>{tooLong("ERROR", 32)}</div>
        }
    }
    render() {
        return(<label className="title">{this.label}</label>)
    }
}

export { Title }