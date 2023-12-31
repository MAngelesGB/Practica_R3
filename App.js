import React, {Component} from 'react';
import LoginView from './src/LoginView';
import RegisterView from './src/RegisterView';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} hideNavBar/>
    <Scene key='register' component={RegisterView} back/>
  </Scene>
)

export default class App extends Component {true
  render() {
    return <Router scenes={scenes}/>
  }
}
