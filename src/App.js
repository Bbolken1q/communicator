import './styles/App.css';
import './styles/Colors.css'
import './styles/Message.css'
import './styles/InputBar.css'

import React from 'react';

// import { Message } from './components/message'
import { MessageContainer } from './components/messageContainer';
import { Title } from './components/title';
import { UserContainer } from './components/userContainer';
import { Input } from './components/inputbar';
// import { Test } from './components/test'

window.channel = {
  name: "łysy-sus",
  sub: `Ogólnie ogólny kanał.


Ta nazwa wzieła się od tego że kanał nazywał się ogólny a Staś dodał do wszystkich innych "sus" na końcu. I domagałem się (Dawid się domagał) żeby nazwa ogólnego była z końcówką "sus". Więc wyszedł "ogólnysus" bez polskich znaków to "ogolnysus". Co brzmi jak "ogolonysus" czyli "łysy sus"

P.S. I pamiętajcie, nigdy nie ufajcie łysemu... bo może być rudy!

P.P.S. Czyli kastratowi można ufać tylko w połowie`
}

// const messageContainer = React.createElement("MessageContainer")

//   setTimeout(() => {
//   setTimeout(() => {
//     window.messageContainer.editMessage("1", "edited")
//   }, 1000)
//   // setTimeout(() => {
//   //   window.messageContainer.removeMessage("1")
//   // }, 2000)
// }, 3000)

setTimeout(() => {
  for (let i = 0; i < 20; i++) {
    window.messageContainer.addMessage("1", "message", "1")
  }
}, 1)

setTimeout(() => {
  window.userContainer.addUser("1")
}, 1);

function App() {
  return (
    <div style={{
      width: "100%",
      height: "100%"
    }}>
      <UserContainer />
      <Title text={window.channel.name} sub={window.channel.sub}/>
      <MessageContainer />
      <Input />
    </div>
    
  );
}

export default App;
