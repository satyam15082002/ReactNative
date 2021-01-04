import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import {store,persistor} from "./redux/store";
import Login from "./components/Auth/Login";
import { PersistGate } from 'redux-persist/integration/react';
import { createStackNavigator } from "react-navigation-stack";
import TodoDetail from "./components/TodoDetail";
import MainNavigator from "./MainNavigator";
const Main=createStackNavigator({
  Stack:{
    screen:MainNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Myapp" })},
  TodoDetail:TodoDetail,
})
const AppNavigator = createSwitchNavigator({
  Login:Login,
  Main:Main,
});

const Navigation= createAppContainer(AppNavigator);

export default class App extends React.Component
{
  render()
  {
    return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <Navigation/>
      </PersistGate>     
    </Provider>
    )
  }
}