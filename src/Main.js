import React from "react";
import Beast from './Beast';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Beast
          title="Horned Lizard"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/4/46/Horned_lizard_032507_kdh.jpg" altImg="Horned Lizard"
          description="Is horny" />
        <Beast
          title="Rhinoceros"
          imgUrl= "https://upload.wikimedia.org/wikipedia/commons/4/4f/Rhino_%28234581759%29.jpeg" altImg="Rhino"
          description="Has a huge horn" />
      </main>
    )
  }
}

export default Main;