import React from "react";
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <>
      {/* onClick={this.props.handleShowModal} would go into footer element */}
      <footer>
        &copy; Berto Industries
      </footer>
      </>
    )
  }
}

export default Footer;
