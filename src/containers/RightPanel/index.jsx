import React, { Component } from "react";
import Filters from "../../components/Filters";
import RepoDetails from "../../components/RepoDetails";

export class RigthPanel extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log('this.props.getRepos:', this.props.getRepos)
  //   this.state = {
  //     data: this.props.getRepos,
  //     tempData: this.props.getRepos
  //   }
  // }

  render() {
    return (
      <div>
        <Filters onChange={(e) => this.props.onChange(e.target.value)} />
        <RepoDetails repoDetails={this.props.getRepos} />
      </div>
    );
  }
}

export default RigthPanel;
