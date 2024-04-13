import React from 'react';
// import createChatBotMessage from "react-chatbot-kit";
// import Config from "./Config";

const messageParser = ({ children, actions }) => {
  const parse = (message) => {
    const checker = children.props.state.checker;
    const {name, age, movie} = children.props.state.userData;
    if(message===".restart"){
      actions.reStart();
    }
    else if (checker === 'name') {
      message = message.trim();
      if (message.length > 2) {
        actions.askAge();
        children.props.state.userData.name = message;
      }
      else actions.answerCorrectly('enter a valid name!');
    }
    else if (checker === 'age') {
      if (message=Number(message)) {
        actions.choosePref();
        children.props.state.userData.age = message;
      }
      else actions.answerCorrectly('enter a valid age!');
    }
    // else if (checker === 'pref') {
    //   actions.choosePref(message);
    // }
    else if(age>=18 && checker==='showAdult'){

    }
    console.log(children.props.state);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions
        });
      })}
    </div>
  );
};

export default messageParser;