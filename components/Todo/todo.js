
import React from 'react';
import { connect } from "react-redux";
import { View,ScrollView,Text,Button,Switch ,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import {addTodo,delTodo,updateTodoId,updateTodo} from "../../redux/action";

const TodoItem=(props)=>(
    <TouchableOpacity style={style.TodoItem} onPressIn={props.navigate}  >
        <Switch onValueChange={props.toggleTodo} value={props.todo.checked}/>
        <Text style={style.TodoText}>
            {(props.todo.text.length>20)?props.todo.text.substr(0,20)+"...":props.todo.text}
        </Text>
       <Button  onPress={props.ondelete} title="Delete" />
    </TouchableOpacity>
)

 class Todo extends React.Component {
     //props={todos:{text:"string",id:int,checked:bool},
     //todoid:{id:int}}
     constructor(props)
     {
         super(props)
         this.state={
             todovalue:'',
         }
     }
    deleteTodo(obj){
        if(obj.checked)
        {
        this.props.delTodo({id:obj.id});
        }
 
    }
    addTodo(){
       if(this.state.todovalue.length>0){
        this.props.addTodo({text:this.state.todovalue,id:this.props.todoid.id,checked:false});      
        this.props.updateTodoId({id:this.props.todoid.id});
        this.setState({todovalue:""});
        }
     }
     toggleTodo(id)
     {

         this.props.todos.map(todo=>{
             if(todo.id===id){
                 this.props.updateTodo({id:id,checked:!todo.checked});
             }
             return todo;
         });
     }
  render()
  { 
    return( 
        <View style={style.container}>
            <Text style={style.header} >Todo App</Text>
            <TextInput style={style.TodoInput}   placeholder="Enter Todo..." 
             onChangeText={val =>this.setState({todovalue:val})} value={this.state.todovalue}/>
            <Button title="AddItem" onPress={()=>this.addTodo()} />
            <ScrollView horizontal={false} >
            {
            this.props.todos.map(todo=>
            <TodoItem todo={todo} key={todo.id} ondelete={()=>this.deleteTodo(todo) }
            toggleTodo={()=>this.toggleTodo(todo.id)} navigate={()=>this.props.navigation.navigate("TodoDetail",{text:todo.text})}
            />)
            }
            </ScrollView>
        </View>
    )
  }
}
const style=StyleSheet.create({
    container:{
        fontSize:40,
        flex:1,
        paddingTop:10,
    },
    header:{
        fontSize:40,
        textAlign:'center',
    },
    TodoItem:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
        padding:10,
        margin:5,
        borderBottomWidth:2,
        borderBottomColor:'rgb(100,100,100)'
    },
    TodoText:{
        paddingRight:20,
        fontSize:20,
        overflow:'scroll',
    },
    TodoInput:
    {
        fontSize:18,
        borderWidth:1,
        borderColor:'rgb(100,100,100)',
        padding:5,
        margin:2,
        borderRadius:10,
    }
})




const mapStatetoProps=(state)=>({
    user:state.user,
    todos:state.todos,
    todoid:state.todoid,
})
const mapDispatchtoProps= 
{
    addTodo:addTodo,delTodo:delTodo,
    updateTodoId:updateTodoId,updateTodo:updateTodo,
};
export default connect(mapStatetoProps,mapDispatchtoProps)(Todo);

