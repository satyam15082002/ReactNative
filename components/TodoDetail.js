import React from "react";
import { Text,View } from "react-native";



export default class TodoDetail extends React.Component {
 static navigationOptions= ({ navigation }) => ({
    title: `${navigation.getParam('text')}` })

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize:30}}>TodoDetail:-{this.props.navigation.getParam('text')}</Text>
        </View>
      );
    }
  }