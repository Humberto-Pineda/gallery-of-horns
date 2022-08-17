import React from "react";
import Card from 'react-bootstrap/Card';
import './Beast.css';

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };

  render() {
    // console.log(this.props.title);
    // console.log(this.props.image_url);
    // console.log(this.props.description);
    return (
      <Card className="beastie" style={{ width: '18rem' }}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.altImg} />
        <Card.Text onClick={this.handleVotes}>❤️ {this.state.votes}  FAVS</Card.Text>
        <Card.Text>⬆️ Add to favorites! ⬆️</Card.Text>
        <Card.Text>{this.props.description}</Card.Text>
      </Card>
    )
  }
}

export default Beast;