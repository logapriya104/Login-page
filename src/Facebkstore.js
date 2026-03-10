
import {createStore}from "redux";

const initialState = {
   valuem: '',
  paswd: ""

  //paswd:"priya123"
 
};

function bkstore(state = initialState, action) {
switch(action.type){
  case "UPDATE_PASSWORD":
       return {
         ...state,
       paswd: action.payload
};


default:
  return state;
}}

const Facebkstore = createStore(bkstore);
export default Facebkstore;


