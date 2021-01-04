import First from "./components/Test";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Logout from "./components/Auth/Logout";
import Todo from "./components/Todo/todo";
const MainNavigator= createMaterialTopTabNavigator({
    First: First,
    Todo:Todo,
    Logout:Logout,
  },  {
    initialRouteName: 'First',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    tabStyle: { backgroundColor: '#694fad'},
  })


export default MainNavigator;