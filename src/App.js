import './App.css';
import Chatbot from "react-chatbot-kit";
import Config from "./chatbot/Config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css'


function App() {
  return (
    <div className="app_container">
      <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
