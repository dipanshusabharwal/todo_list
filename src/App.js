import React from "react";
import ListItem from "./components/ListItem";
import { addTask } from "./react-redux/Actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { toDoList: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: currentTask => dispatch(addTask(currentTask, false))
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTask: "",
      completed: "",
      data: []
    };
  }

  handleClick = () => {
    if (this.state.currentTask !== "") {
      this.props.addTask(this.state.currentTask);

      this.setState({
        currentTask: "",
        completed: false
      });
    }
  };

  handleChange = event => {
    let currentTask = event.target.value;
    // console.log(currentTask);

    this.setState({
      currentTask: currentTask,
      completed: false
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="input-group col-8 mx-auto">
          <input
            className="form-control border border-dark rounded-0"
            placeholder="Enter task"
            value={this.state.currentTask}
            onChange={this.handleChange}
          ></input>
          <div className="input-group-append">
            <button
              className="btn btn-dark rounded-0 font-weight-bold"
              onClick={this.handleClick}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-5">
          <ol>
            {this.props.toDoList.map((task, index) => {
              return (
                <ListItem
                  task={task.currentTask}
                  completed={task.completed}
                  index={index}
                  key={index}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
