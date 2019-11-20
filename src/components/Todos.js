import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <Todoitem
        key={todo.id}  //Create unique ID to prevent all added todos from becoming single instance
        todo={todo}
        markComplete={this.props.markComplete}  //Currently marking all new todos with a line through
        delTodo={this.props.delTodo}  //Currently deleting all recently added todos
      />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
