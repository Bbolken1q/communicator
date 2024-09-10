import React from "react";
import { tooLong } from "./universal";

class Title extends React.Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }

    update = () => {
        this.sub = tooLong(this.props.sub, null, this.ref.current.offsetWidth - 150, 13) 
        this.setState({}) 
    }

    componentDidMount() {
        console.log("width: "+ this.ref.current.offsetWidth)
        
        this.update()

        window.addEventListener('resize', this.update);
    }

    render() {
        if(this.props.text) {
            this.label = <div><div className="hash"># </div><div className="main">{tooLong(this.props.text, 32)}</div><div className="sub">{this.sub}</div></div>
        }
        else {
            this.label = <div><div className="gray"># </div>{tooLong("ERROR", 32)}</div>
        }
        return(<label className="title" ref={this.ref}>{this.label}</label>)
    }
}

export { Title }