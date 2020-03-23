const add = "addTask";
const update = "updateTask";
const remove = "removeTask";

export const addTask = (currentTask, completed) => ({
  type: add,
  payload: { currentTask, completed }
});

export const updateTask = index => ({
  type: update,
  payload: index
});

export const removeTask = index => ({
  type: remove,
  payload: index
});
