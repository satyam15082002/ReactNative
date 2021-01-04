import React from 'react';
import { StyleSheet,Image, Text, View, TouchableOpacity ,useWindowDimensions} from 'react-native';
import { Camera } from 'expo-camera';


export default class First extends React.Component 
{
  constructor(props)
  {
    super(props)
    this.state={
      hasPermission: null,
      type: Camera.Constants.Type.back,
      Img:false,
      
    }
  }
  permission=async ()=>{
    let {status}=await Camera.getPermissionsAsync();
    if(status!=='granted')
    {
      console.log("Camera permission not granted")
      return;
    }
  }
  flip=()=>{
    let type=(this.state.type===Camera.Constants.Type.back)?Camera.Constants.Type.front:Camera.Constants.Type.back;
    this.setState({type:type})
  }
  componentDidMount()
  {
    this.permission();
  }
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({skipProcessing:true,quality:1});
      this.setState({Img:photo})
    }
  };
  render()
  {
      return (
      <View >
        <Camera  type={this.state.type} autoFocus="on"  ref={ref =>{this.camera = ref;}} 
         style={{width:420,height:300,}}>
        </Camera>
        <TouchableOpacity onPress={this.flip} >
        <Text style={style.buttoncontainer}>Flip</Text>
        </TouchableOpacity>
         <TouchableOpacity  onPress={this.snap} >
        <Text style={style.buttoncontainer}>Capture</Text>
        </TouchableOpacity>
        {(this.state.Img)?<Image source={{uri:this.state.Img.uri}}
        style={{width:420,height:150}}
        />:null}
        </View>
        )
  }
}
const style=StyleSheet.create({

  buttoncontainer:{
    fontSize:20,
    backgroundColor:'white',
    color:'black',
    paddingVertical:5,
    paddingHorizontal:40,
    borderRadius:20,
    margin:5
  }
})