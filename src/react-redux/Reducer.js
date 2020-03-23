const add = "addTask";
const update = "updateTask";
const remove = "removeTask";

let allTasks = [];

const Reducer = (toDoList = [], action) => {
  switch (action.type) {
    case add:
      return [...toDoList, action.payload];
    case update:
      allTasks = toDoList;
      allTasks[action.payload].completed = !allTasks[action.payload].completed;
      return allTasks;
    case remove:
      allTasks = toDoList;
      allTasks = allTasks.filter((task, index) => {
        return index !== action.payload;
      });
      return allTasks;
    default:
      return toDoList;
  }
};

export default Reducer;
