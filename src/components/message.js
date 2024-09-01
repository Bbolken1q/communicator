import { Avatar, tooLong } from "./universal";
import React from 'react';
import Markdown from "react-markdown"
import users from './users'
import remarkGfm from "remark-gfm";

class Message extends React.Component {
    constructor(props) {
        super(props)

        // this.messageId = new messageid
        this.userid = this.props.userid
        
        for(let i in users) {
            if(users[i].userid === this.props.userid) {
                this.object = users[i];
            }
        }
        if(!this.object)
        {
            this.object = {
                userid: "-1",
                name: "ERROR",
                text: "*Unable to read message data*",
                avatar: "https://cdn.discordapp.com/avatars/702205749354299513/a148e2c6e423fdc97a57eae5b8c4cd93?size=1024" 
            }
        }

        this.state = {
            user_id: this.userid,
            name: this.object.name,
            avatar: this.object.avatar,
            text: this.props.messagetext
        }
    }
    render()
    {
        this.state.text = this.props.messagetext
        if(this.props.edited)
        {
            this.state.text = this.state.text + `
#### (edited)`
        }
        return(
            <div className="message">
                <table>
                    <tr>
                        <td rowSpan={2} style={{
                            verticalAlign: "top"
                        }}>
                            <Avatar url={this.state}/>
                        </td>
                        <td>
                        <username style={{ paddingLeft: 10 }}>
                            {tooLong(this.state.name, 124)}
                        </username>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <text style={{ paddingLeft: 10, width: "910px"}}>
                    <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: 'he1',
                        h2: 'he2',
                        h3: 'he3',
                        h4: 'he4',
                        h5: 'he5',
                        h6: 'he6',

                        p: 'div', //this beautiful feature fucks up formatting so its disabled
                      }}>
                        {this.state.text}
                    </Markdown>
                </text>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export { Message };