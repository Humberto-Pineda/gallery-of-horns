import React from "react";
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
    return (
      <article className="beastie">
        <h2>{this.props.title}</h2>
        <p>{this.state.votes} Favorite</p>
        <p onClick={this.handleVotes}>Click here to add to favorites!</p>
        <img src={this.props.image_url}  alt={this.props.altImg}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default Beast;