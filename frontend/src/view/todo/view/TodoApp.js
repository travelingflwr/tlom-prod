import React from "react";
import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class TodoApp extends React.Component {
  render() {
    return (

      <div
        style={{
          padding: 0,
          marginLeft: '12px',
          marginRight: '12px',
          marginTop: '12px',
        }}
      >
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
              paddingTop: '48px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
          >
            <div className="bg-white p-2 border border-rounded">
              <h2>Projects</h2>
              <ProjectList />
              <ProjectForm />
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
              paddingTop: '48px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
          >
            <div className="bg-white p-2 border border-rounded">
              <h2>Tasks</h2>
              <TodoList />
              <TodoForm />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default TodoApp;