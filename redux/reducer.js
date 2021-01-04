import { combineReducers } from "redux";
import { ADD_TODO,DEL_TODO, UPDATE_TODO, UPDATE_TODOID,UPDATE_USER }  from"./action";


const merge=(prev,next)=>Object.assign({},prev,next);

//TDOD reducer
const TodoReducer=(state=[],action)=>
{
    switch(action.type)
    {
        case ADD_TODO:
            return [...state,action.payload];
        case DEL_TODO:
            return state.filter(todo=>todo.id!==action.payload.id);
        case UPDATE_TODO:
            state=state.map((todo)=>{
                if(todo.id===action.payload.id){
                todo=merge(todo,action.payload);
                }
                return todo
            })
            return state;
        default:
            return state;
    }

}
//TODOID reducer
const TodoIdReducer=(state={id:1},action)=>
{
    switch(action.type)
    {
        case UPDATE_TODOID:
            return {id:action.payload.id+1};
        default:
            return state;
    }
}
//USER reducer
const UserReducer=(state={login:false},action)=>
{
    switch(action.type)
    {
        case UPDATE_USER:
            return merge(state,action.payload);
        default:
            return state;
    }
}

const reducer=combineReducers({
    todos:TodoReducer,
    todoid:TodoIdReducer,
    user:UserReducer,
});

export default reducer;
