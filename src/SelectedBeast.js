import React from "react";
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';



class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Card className="beastie" style={{ width: '18rem' }}>
            <Card.Title>
              {this.props.beast.title}
            </Card.Title>
            <Card.Img
              variant="top"
              src={this.props.beast.image_url}
              alt={this.props.beast.altImg}
            />
            <Card.Text>{this.props.beast.description}</Card.Text>
          </Card>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;
