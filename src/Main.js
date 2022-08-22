import React from "react";
import Beast from './Beast';
import Horns from './Horns.js';
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sort: 'selected',
      selectedData: this.props.data,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleSelect = (e) => {
    let selected = parseInt(e.target.value);
    this.setState({
      sort: selected
    })
  }

  render() {
    let hornedBeast = this.state.selectedData.map((beast, idx) => {
      return <Beast
        temp={this.props.temp}
        beast={beast}
        key={idx}
        handleShowModal={this.props.handleShowModal}
      />
    });

    return (
      <main>
        <Horns
        data={this.props.data}
        handleSelect={this.handleSelect}
        handleSubmit={this.handleSubmit}
        />
        {hornedBeast}
      </main>
    );
  }
}

export default Main;