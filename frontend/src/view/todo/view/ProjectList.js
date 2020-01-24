import React from "react";
import projectsSelectors from "../modules/projects/projectsSelectors";
import { connect } from "react-redux";

class ProjectList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

const select = state => {
  return {
    items: projectsSelectors.selectItems(state)
  };
};

export default connect(select)(ProjectList);