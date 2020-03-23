import React from "react";
import { updateTask, removeTask } from "../react-redux/Actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { toDoList: state };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTask: index => dispatch(updateTask(index)),
    removeTask: index => dispatch(removeTask(index))
  };
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: props.task.completed
    };
  }

  handleCheck = event => {
    let taskNumber = Number(event.target.id);
    this.props.updateTask(taskNumber);
    let completedFlag = !this.state.completed;
    this.setState({
      completed: completedFlag
    });
  };

  handleDelete = event => {
    let taskNumber = Number(event.target.id);
    this.props.removeTask(taskNumber);
  };

  render() {
    if (this.props.toDoList[this.props.index].completed) {
      return (
        <div className="container col-12 mx-auto bg-success text-light p-1 rounded mb-3">
          <div className="d-flex justify-content-between">
            <div className="form-check form-check-inline ml-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.handleCheck}
                value={this.state.completed}
                id={this.props.index}
              />
            </div>
            <div className="align-self-center">
              <del>{this.props.task}</del>
            </div>
            <button
              className="btn btn-sm btn-danger mr-3"
              id={this.props.index}
              onClick={this.handleDelete}
            >
              x
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container col-12 mx-auto bg-dark text-light p-1 rounded mb-3">
          <div className="d-flex justify-content-between">
            <div className="form-check form-check-inline ml-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={this.handleCheck}
                id={this.props.index}
              />
            </div>
            <div className="align-self-center">{this.props.task}</div>
            <button
              className="btn btn-sm btn-danger mr-3"
              id={this.props.index}
              onClick={this.handleDelete}
            >
              x
            </button>
          </div>
        </div>
      );
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
