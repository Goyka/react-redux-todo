import { ADD, DELETE, DONE, DETAIL } from "./actions";
const initState = {
  todos: [],
  detailTodos: {},
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todos: [...state.todos, action.todo] };
    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case DONE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
        detailTodos: action.todo,
      };
    case DETAIL:
      return {
        todos: [...state.todos],
        detailTodos: action.todo,
      };
    default:
      return state;
  }
};

export default reducer;
