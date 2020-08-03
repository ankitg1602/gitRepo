import React, { Component } from "react";
import Select from "../Select";
import './index.css'

let options = ['All', 'Sources', 'Forks', 'Archived', 'Mirrors']
class Filters extends Component {


  render() {
    return (
      <div className="filter_container">
        <input type="text" className="input" placeholder="Find a repository..." onChange={(e) => this.props.onChange(e)} />
        <Select placeholder="Type: All" options={options} />
        <Select placeholder="Language: All" options={[]} />
      </div>
    );
  }
}

export default Filters;
