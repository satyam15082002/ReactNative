
//action type
//TODO
export const ADD_TODO='ADD_TODO';
export const DEL_TODO='DEL_TODO';
export const UPDATE_TODO='UPDATE_TODO';
//TODOID
export const UPDATE_TODOID='UPDATE_TODOID';
//USER
export const UPDATE_USER='UPDATE_USER';

//action creators
//TODO
export const addTodo=(update)=>({type:ADD_TODO,payload:update});
export const delTodo=(update)=>({type:DEL_TODO,payload:update});
export const updateTodo=(update)=>({type:UPDATE_TODO,payload:update});
//TODOID
export const updateTodoId=(update)=>({type:UPDATE_TODOID,payload:update});
//USER
export const updateUser=(update)=>({type:UPDATE_USER,payload:update});