import React, {Component} from 'react';

class TextBox extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <input
        type="text"
        placeholder="Enter Text"
        value = {this.props.inputText}
        onChange={this.changeText.bind(this)}
        />
    )
  }

  changeText(e) {
    // this.setState({
    //   inputText:e.currentTarget.value
    // });
    this.props.dispatch({type:"UPDATE_TEXT", inputText:e.currentTarget.value})
  }

}

  export default TextBox;
