import React from 'react';
import {updateUser} from "../../redux/action";
import { connect } from "react-redux";
import { View,Text,Button,TextInput,StyleSheet} from "react-native";
import  Constants  from "expo-constants";
class Login extends React.Component {
constructor(props)
{
    super(props)
    this.state={
        username:"",
        password:"",
        isformvalid:false,
        error:"",
    }
} 
validateform=()=>
{
    if(this.state.username.length>=3&&this.state.password.length>=4)
    {
        this.setState({isformvalid:true})
    }
    else{
        this.setState({isformvalid:false})
    }
}
handleChange=(key)=>value=>
{
this.setState({[key]:value});
}
componentDidUpdate=(prevProps,prevState)=>
{
    if(prevState.username!==this.state.username||prevState.password!==this.state.password)
        this.validateform()

}
handleSubmit=async ()=>
{
    const params={
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({username:this.state.username,password:this.state.password}),
    }
    var response=await fetch("http://192.168.43.41:1000/login",params);
    if(response.ok)
    {
        this.props.updateUser({username:this.state.username,login:true});
        this.props.navigation.navigate('Main');
    }
    else
    {
        var error=await response.text();
        this.setState({error:error});
    }
    
    
}
componentDidMount()
{
    if(this.props.user.login)
    this.props.navigation.navigate("Main")
}


render()
  { 
    return( 
        <View  style={style.container}>
        <Text style={style.header}>Login</Text>
        <Text style={style.Error}>{this.state.error}</Text>
        <TextInput  placeholder="Username" value={this.state.username} style={style.Input}
         onChangeText={this.handleChange('username')} />
        <TextInput placeholder="Password"  value={this.state.password} style={style.Input}
        onChangeText={this.handleChange('password')} secureTextEntry={true} />
        <Button title="Login" disabled={!this.state.isformvalid} onPress={()=>this.handleSubmit()} />
        </View>
    )
  }
}

const mapDispatchToProps={
    updateUser:updateUser
}
const mapStateToProps=state=>({user:state.user});

export default connect(mapStateToProps,mapDispatchToProps)(Login);


const style=StyleSheet.create({
    container:{
        fontSize:40,
        flex:1,
        padding:Constants.statusBarHeight,
    },
    header:{
        fontSize:40,
        textAlign:'center',
    },
    Input:
    {
        fontSize:18,
        borderWidth:1,
        borderColor:'rgb(100,100,100)',
        padding:5,
        margin:5,
        borderRadius:10,
    },
    Error:{
        fontStyle:'italic',
        textAlign:'center',
        color:'rgb(250,0,0)',
    }
 
})

