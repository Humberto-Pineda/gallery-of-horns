import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './Horns.css';

class Horns extends React.Component {
  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Choose creatures based on number of horns</Form.Label>
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="All"> All Creatures</option>
            <option value="1">1 Horn</option>
            <option value="2">2 Horns</option>
            <option value="3">3 Horns</option>
            <option value="100">Max Horns</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Horns;