import React from "react";

class Beast extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl}  alt={this.props.altImg}/>
        <p>{this.props.description}</p>
      </article>
    )
  }
}

export default Beast;