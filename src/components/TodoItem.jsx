import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delete_todo, done_todo, detail_todo } from "../modules/actions";
import { styled } from "styled-components";
//
function TodoItem({ todos }) {
  const dispatch = useDispatch();
  const detailTodo = useSelector((state) => state.detailTodos);
  console.log(detailTodo);
  const { id, title, value, isDone } = todos;

  const handleClick = () => {
    dispatch(delete_todo(todos.id));
  };
  const handleDoneCancel = () => {
    dispatch(done_todo(todos.id));
  };
  const handleElement = () => {
    const todo = {
      id: id,
      title: title,
      value: value,
    };
    dispatch(detail_todo(todo));
  };

  if (isDone !== null && isDone === false) {
    return (
      <TodoList>
        <TodoCard>
          <CardLink to="/TodoDetail" onClick={handleElement}>
            «detail view»
          </CardLink>
          <CardTitle>{title}</CardTitle>
          <p>{value}</p>
          <CardBtns>
            <DoneBtn onClick={handleDoneCancel}>✔︎</DoneBtn>
            <DelBtn onClick={handleClick}>✖︎</DelBtn>
          </CardBtns>
        </TodoCard>
      </TodoList>
    );
  } else if (isDone === true) {
    return (
      <TodoList>
        <DoneCard>
          <CardLink to="/TodoDetail" onClick={handleElement}>
            «detail view»
          </CardLink>
          <CardTitle>{title}</CardTitle>
          <p>{value}</p>
          <CardBtns>
            <DoneBtn onClick={handleDoneCancel}>❮</DoneBtn>
            <DelBtn onClick={handleClick}>✖︎</DelBtn>
          </CardBtns>
        </DoneCard>
      </TodoList>
    );
  }
}
export default TodoItem;
//
const TodoList = styled.div`
  background-color: rgb(20, 20, 20);
  border: none;
  border-radius: 9px;
  max-width: 230px;
  max-height: 170px;
  margin: 71px 31px 0 0;
`;

const TodoCard = styled.div`
  margin: auto;
  width: 227px;
  height: 185px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: whitesmoke;
  z-index: 1;
`;

const DoneCard = styled.div`
  margin: auto;
  width: 227px;
  height: 185px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: whitesmoke;
`;

const CardTitle = styled.h4`
  color: rgb(255, 231, 73);
  font-size: 23px;
  margin-bottom: -13px;
`;

const CardLink = styled(Link)`
  color: whitesmoke;
  font-size: 13px;
  margin: -1px 0 0 -117px;
`;

const CardBtns = styled.div`
  margin: 0 77px 13px 0;
  display: flex;
  justify-content: space-between;
`;

const DoneBtn = styled.button`
  margin-left: -20px;
  width: 70px;
  height: 30px;
  margin: 20px 0 0 150px;
  border: 2px solid whitesmoke;
  border-radius: 7px;
  background-color: whitesmoke;
  color: rgb(20, 20, 20);
  font-weight: bold;
  cursor: pointer;
`;

const DelBtn = styled.button`
  width: 70px;
  height: 30px;
  margin: 20px 5px 0 5px;
  border: 2px solid whitesmoke;
  border-radius: 7px;
  background-color: whitesmoke;
  color: rgb(20, 20, 20);
  font-weight: bold;
  cursor: pointer;
`;
