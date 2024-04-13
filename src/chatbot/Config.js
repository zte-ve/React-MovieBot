
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MyAvatar from "../components/BotAvatar";
import UserAvatar from '../components/UserAvatar';
import GetStarted from "../components/GetStarted";
import ChoosePref from "../components/ChoosePref";
import YesNo from "../components/YesNo";
import GenreSelection from "../components/GenreSelection";
import SeleceteMedia from "../components/SeleceteMedia";

const botName='MoviesBot';
const config = {
    botName: botName,
    lang: "no",
    initialMessages: [
        createChatBotMessage(
          `Welcomne to the ${botName}, I’m here to help you find the perfect movie/series to watch.`),
          createChatBotMessage(`Note: If anytime you want to restart just type ".restart"`,
          {
            delay: 500,
            widget: 'GetStarted',
          }
        )
    ],
    state: {
      checker: null,
      userData: {
        name: '',
        age: null,
        movie: {
          pref: 'movies',
          genre: null,
          showAdult: false
        }
      }
    },
    customComponents: {
       // Replaces the default bot avatar
       botAvatar: (props) => <MyAvatar {...props} />,
       // Replaces the default user icon
       userAvatar: (props) => <UserAvatar {...props} />,
    },
    widgets: [
      {
        widgetName: 'GetStarted',
        widgetFunc: (props) => {return <GetStarted {...props} />},
        mapStateToProps: []
      },
      {
        widgetName: 'ChoosePref',
        widgetFunc: (props) => {return <ChoosePref {...props} />},
        mapStateToProps: []
      },
      {
        widgetName: 'YesNo',
        widgetFunc: (props) => {return <YesNo {...props} />},
        mapStateToProps: []
      },
      {
        widgetName: 'GenreSelection',
        widgetFunc: (props) => {return <GenreSelection {...props} />},
        mapStateToProps: []
      },
      {
        widgetName: 'SeleceteMedia',
        widgetFunc: (props) => {return <SeleceteMedia {...props} />},
        mapStateToProps: []
      }
    ]
}

export default config
