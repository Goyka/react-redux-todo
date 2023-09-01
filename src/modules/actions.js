export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const DETAIL = "DETAIL";

export const add_todo = (todo) => {
  return {
    type: ADD,
    todo: {
      id: todo.id,
      title: todo.title,
      value: todo.value,
      isDone: todo.isDone,
    },
  };
};

export const delete_todo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const done_todo = (id) => {
  return {
    type: DONE,
    id,
  };
};

export const detail_todo = (todo) => {
  return {
    type: DETAIL,
    todo: {
      id: todo.id,
      title: todo.title,
      value: todo.value,
    },
  };
};
