import React, { Component } from "react";

class Test1 extends Component {
  constructor(props) {
    console.clear();
    console.log("CLASS constructor  выводится только 1 раз");
    console.log(props);
    super(props);
    this.state = {
      s1: 0
    };
  }

  buttonHandler = () => {
    console.log("CLASS work push button");
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
  }

  static getDerivedStateFromProps(props,state){
    console.log('CLASS get derived state - получить полученное состояние');
    //return null;
   return ({"s1":props.arg})

  }

  componentDidMount() {
      
    console.log( 'CLASS component Did mount  - выводится только 1 раз');
}

    componentDidUpdate() {
        console.log( 'CLASS component Did update - выводится при каждом обновлении, можно выполнить действия после обновления');

    }


  render() {
    console.log("CLASS render 1");
    return (
      <>
        <div>
          {console.log("CLASS render 2 from return")}
          <button onClick={this.buttonHandler}> Push Class </button>
        </div>

        <div> {this.state.s1}</div>
      </>
    );
  }
}
export default Test1;
