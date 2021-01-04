
import { createStore} from "redux";
import reducer  from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

const persistedReducer=persistReducer(persistConfig,reducer);
export const store=new createStore(persistedReducer);
export const persistor = persistStore(store);
/*
store.dispatch(updateUser({"name":"satyam","class":12}));
store.dispatch(updateUser({"name":"shivam","class":12,login:true}));
store.dispatch(addContact({"name":"satyam","number":9165180194}));
store.dispatch(addContact({"name":"rajendra kumar tamrakar","number":9575995051}));
console.log(store.getState())
*/

