import React from 'react';
import lang from '../lang.json'
import '../styles/Colors.css'
import users from './users'
// import { io } from 'socket.io-client';

const ping = new Audio('../assets/ping.mp3')

function tooLong(string, maxLength) {
    if(!string) { 
        return "";
    }
    else if(string.length === 0) {
        return "";
    }
    else {
        if(string.length >= maxLength) {
            return string.slice(0, maxLength-3)+"..."
        }
        else {
            return string.slice(0, maxLength)
        }
    }
    
}

function Avatar(url) { 
    if(url) {
        return (<img src={url.url.avatar} className="avatar" alt=""/>)
    }
    else {
        return (<img src="" className="avatar" alt=""/>)
    }
    
}

class User extends React.Component {
    constructor(userid) {
        super()
        this.userid = userid
        for(let i in users) {
            if(users[i].userid === userid.userid) {
                this.object = users[i];
            }
        }
        if(!this.object)
        {
            this.object = {
                userid: "-1",
                name: "ERROR",
                status_message: "Unable to read user data",
                color: "red",
                avatar: "https://cdn.discordapp.com/avatars/702205749354299513/a148e2c6e423fdc97a57eae5b8c4cd93?size=1024" 
            }
        }

        this.state = {
            user_id: this.userid,
            name: this.object.name,
            avatar: this.object.avatar,
            color: this.object.color,
            status_message: this.object.status_message
        }

        this.render()
    }
    
    render() {
        this.state.user_id = this.userid
        this.state.name = this.object.name
        this.state.avatar = this.object.avatar
        this.state.color = this.object.color
        this.state.status_message = this.object.status_message

        switch (this.state.status_message) {
            case lang.lang.online:
                    this.state.color = "green";
                    this.state.isOffline = ""
                break;
            case lang.lang.offline:
                    this.state.color = "white";
                    this.state.isOffline = " offline"
                break;
            case lang.lang.afk:
                    this.state.color = "yellow";
                    this.state.isOffline = ""
                break;
            case lang.lang.dnd:
                    this.state.color = "red";
                    this.state.isOffline = ""
                break;
        
            default:
                    // this.state.color = ;
                    this.state.isOffline = ""
                break;
        }

        return (
            <button className={"user" + this.state.isOffline}
            style = {{
                width: 205,
                height: 50,
                paddingLeft: 5,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 5,
                marginBottom: 5,
            }}>
                <Avatar url={this.state}/>
                <username style={{ paddingLeft: 10 }}>
                    <b>{tooLong(this.state.name, 19)}</b>
                    <br />
                </username>
                <userstatus style={{ paddingLeft: 10 }}>
                    <label className={this.state.color}>{tooLong(this.state.status_message, 26)}</label>
                </userstatus>
            </button>
        )
    }
}


export { Avatar, User, tooLong };