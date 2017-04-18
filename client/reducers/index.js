import {combineReducers} from 'redux';
let reducerTextBox = function (inputText = "", action){
  console.log(action);
  switch(action.type){
    case 'UPDATE_TEXT':
    //   return Object.asign({},inputTextObj, {textInput:action.inputText});
      return action.inputText;
    default:
      return inputText;
  }
}

let reducerAsync = function (asyncObj={}, action){
  switch(action.type){
    case 'UPDATE_OBJ':
       // return {...state, {inputText:action.inputText}}
      console.log(action.inputText);
      return Object.assign({},asyncObj);
    default:
      return asyncObj;
  }
}

const reducers = combineReducers({
  inputText : reducerTextBox, 
  asyncObj : reducerAsync
});

export default reducers;
