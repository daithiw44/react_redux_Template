import React, {Component} from 'react';
import TextBox from './TextBox';
import {connect} from 'react-redux';
import DumbComponent from './DumbComponent';
class App extends Component {
 render (){
   return (
     <div>
        <TextBox dispatch={this.props.dispatch} inputText={this.props.inputText} />
        <DumbComponent name={this.props.inputText} />
      </div>
   )
 }
}

function mapStateToProps(state){
  return {inputText: state.inputText};
}

export default connect(mapStateToProps)(App);
