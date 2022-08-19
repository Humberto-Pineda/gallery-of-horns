import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import './App.css';
import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {},
    }
  }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,
    })
  }

  handleHideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={data}
          temp={this.handleShowModal}
        />
        <Footer />
        <SelectedBeast
          show={this.state.showModal}
          onHide={this.handleHideModal}
          beast={this.state.beast}
        />
      </>
    );
  }
}

export default App;