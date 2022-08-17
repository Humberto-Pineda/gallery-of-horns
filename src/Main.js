import React from "react";
import Beast from './Beast';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let hornedBeast = [];
    data.forEach((beast, idx) => {
      hornedBeast.push(
        <Beast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={idx}
        />
      )
    });

    return (
      <main>
       {hornedBeast}
      </main>
    );
  }
}

export default Main;