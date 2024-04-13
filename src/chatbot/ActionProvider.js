import React, { useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  // start by asking for user name
  const startAction = () => {
    const msg = createChatBotMessage('Please enter your name to proceed!')
    updateState(msg, 'name');
  }

   // for reStart
   const reStart = () => {
    const msg = [createChatBotMessage('Welcomne to the movieBot, I’m here to help you find the perfect movie/series to watch'),
    createChatBotMessage('Note: If anytime you want to restart just type ".restart"', {
      widget: 'GetStarted'
    })]
    setState(prev=>({
      ...prev,
      messages: msg
    }))
  }

  // an answer correctly action to make user answer in a valid way to the question
  const answerCorrectly = (txt = 'answer correctly!') => {
    const msg = createChatBotMessage(`Please, ${txt}`)
    updateState(msg);
  }

  // after asking name aask for user age
  const askAge = () => {  //name = 'anonymous'
    // setState((prev) => ({
    //   ...prev,
    //   userData: {
    //     ...prev.userData,
    //     name
    //   }
    // }))
    const msg = createChatBotMessage('Let me know your age before we proceed!');
    updateState(msg, 'age');
  }

  //after asking for age let user make a prefrence on what to watch: movie/ TV series/ anime ?
  const choosePref = () => {  //age = 18
    // setState((prev) => ({
    //   ...prev,
    //   userData: {
    //     ...prev.userData,
    //     age
    //   }
    // }))
    const msg = createChatBotMessage('What would you like to see?', {
      widget: "ChoosePref",
    });
    updateState(msg, 'pref');
  }

  // asking user for his/her preference about showing adult movies or not? (only if user-age >=18)
  const showAdult=()=>{
    const msg = createChatBotMessage('Are you fine with adult movies or shows?', {
      widget: "YesNo",
    });
    updateState(msg, 'showAdult');
  }

  // ask user to select a genre!
  const genreSelection=()=>{
    const msg = createChatBotMessage('Please, select a genre from below!', {
      widget: "GenreSelection",
    });
    updateState(msg, 'genrePref');
  }

  // qna of the movieBot is completed and ready to give his opinion about user preferred movies!
  const selectionComp=()=>{
    const c=children.props.children;
    let msg = createChatBotMessage(`ok ${c.props.state.userData.name}, I got it. Here are some of my selections for you, that you might like?`, {
      widget: "SelecetedMedia",
    });
    updateState(msg, 'selComp');
    msg=createChatBotMessage(`Enjoy the thrill!`);
    updateState(msg);
  }

  // for updating the message state of chatbot which keeps track of all our communication
  const updateState = (message, checker = '') => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker: ((checker !== '') ? checker : prev.checker)
    }))
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            startAction,
            askAge,
            choosePref,
            answerCorrectly,
            showAdult,
            genreSelection,
            reStart,
            selectionComp
          },
        });
      })}
    </div>
  );
};


export default ActionProvider;