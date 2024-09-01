import React from "react";

class Input extends React.Component {
    // constructor() {
    //     super()
    // }
    render() {
        return(
            <div className="inputbar">
                <input placeholder={"message #"+window.channel.name}/>
            </div>
        )
    }
}

export { Input }