import React from 'react';
import { Message } from './message';

class messageClass {
    constructor(component, id, user, text) {
        this.id = id
        this.component = component
        this.user = user
        this.text = text
    }
}

class MessageContainer extends React.Component {
    constructor() {
        super()
        this.messages = []
        this.messageComponents = []
        window.messageContainer = this //define global variable to add messages to
    }

    update(scroll = false) {
        this.messageComponents = []

        // this.messages.every((e) => {
        //     console.log("asdf")
        //     this.messageComponents.push(e.component)
        //     return 0;
        // })

        for(let i in this.messages) {
            this.messageComponents.push(this.messages[i].component)
        }

        this.setState({})

        if(scroll) {
            setTimeout(function (){
                var messages = document.getElementById("messages");
                // console.log(messages.scrollTop)
                // console.log(messages.scrollHeight)
                messages.scrollTo({
                    top:  messages.scrollHeight,
                    left: 0,
                    behavior: "instant",
                  });
            }, 1)
        }
    }

    addMessage(userid, text, messageid) {
        var message = new messageClass(<Message userid={userid} messageid={messageid} messagetext={text} edited={false}/>, messageid, userid, text)
        this.messages.push(message)

        this.update(true)
    }

    removeMessage(messageid) {
        for(let i in this.messages) {
            if(this.messages[i].id === messageid) {
                var position = i
                // console.log("found message with id "+ messageid + " at " + position)
            }
        }
        this.messages.splice(position, 1)
        
        this.update()
    }

    editMessage(messageid, text) {
        for(let i in this.messages) {
            if(this.messages[i].id === messageid) {
                var position = i
                // console.log("found message with id "+ messageid + " at " + position)
            }
        }
        let temp = this.messages[position]
        this.messages.splice(position, 1, new messageClass(<Message userid={temp.user} messageid={messageid} messagetext={text} edited={true}/>, messageid, temp.user, text))
        
        this.update()
    }

    render() {
        return(
            <div className='MessageContainer' id='messages'>{this.messageComponents}</div>
        )
    }
}
export { MessageContainer }