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

  handleDetailedClick = () => {
    this.props.temp(this.props.beast);
  }

  render() {
    return (
      <Card className="beastie" style={{ width: '18rem' }}>
        <Card.Title onClick={this.handleDetailedClick}>
          {this.props.beast.title}
        </Card.Title>
        <Card.Img
          variant="top"
          src={this.props.beast.image_url}
          alt={this.props.beast.altImg}
          onClick={this.handleVotes}
        />
        <Card.Text >❤️ {this.state.votes}  FAVS</Card.Text>
        <Card.Text>⬆️ Add to favorites! ⬆️</Card.Text>
        <Card.Text>{this.props.beast.description}</Card.Text>
      </Card>
    )
  }
}

export default Beast;