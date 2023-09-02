import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem.jsx";
import { styled } from "styled-components";
//
function TodoList() {
  const todos = useSelector((state) => state.reducer.todos);

  return (
    <ListWrap>
      <DoList>
        ✴︎ todo
        {todos.map(
          (todo) =>
            todo.isDone == false && <TodoItem todos={todo} key={todo.id} />
        )}
      </DoList>
      <DoneList>
        ✍︎ done
        {todos.map(
          (todo) =>
            todo.isDone == true && <TodoItem todos={todo} key={todo.id} />
        )}
      </DoneList>
    </ListWrap>
  );
}
export default TodoList;
//
const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoList = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: rgb(20, 20, 20);
  font-size: 23px;
  font-weight: bold;
`;
const DoneList = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  color: rgb(20, 20, 20);
  font-size: 23px;
  font-weight: bold;
`;
