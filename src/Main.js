import React from "react";
import Beast from './Beast';
import './Main.css';

class Main extends React.Component {

  

  render() {
    let hornedBeast = this.props.data.map((beast, idx) => {
      return <Beast
        temp={this.props.temp}
        beast={beast}
        key={idx}
        handleShowModal={this.props.handleShowModal}
      />
    });

    return (
      <main>
        {hornedBeast}
      </main>
    );
  }
}

export default Main;