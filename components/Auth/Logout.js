import React from "react";
import { connect } from "react-redux";
import {updateUser  } from "../../redux/action";
import { View,Text,Button } from "react-native";



class Logout extends React.Component
{
    logout=()=>
    {
        this.props.updateUser({login:false,username:""});
        this.props.navigation.navigate("Login");
    }

    render()
    {
        return(
        <View style={{textAlign:'center',alignItems:'center'}}>
            <Text style={{fontSize:40}}>Hello {this.props.user.username}</Text>
            <Button title="Logout" onPress={this.logout} />
        </View>   
        )
    }
}


export default connect((state)=>({user:state.user}),{updateUser:updateUser})(Logout);