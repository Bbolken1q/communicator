import React from 'react';
import { User } from './universal';
class UserContainer extends React.Component {
    constructor() {
        super()
        this.users = []
        window.userContainer = this //define global variable to add users to
    }
    addUser(userid) {
        this.users.push(<User userid={userid}/>)
        this.setState({})
    }
    render() {
        return(
            <div className="userList">
                <div className="slider">
                    {this.users}
                </div>
            </div>
        )
    }
}
export { UserContainer }