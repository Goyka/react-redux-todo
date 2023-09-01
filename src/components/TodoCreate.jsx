import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../modules/actions";
import { styled } from "styled-components";
//
const TodoCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const todoListAdd = () => {
    if (title !== "" && value !== "") {
      const todo = {
        id: Date.now(),
        title: title,
        value: value,
        isDone: false,
      };
      dispatch(add_todo(todo));
      setTitle("");
      setValue("");
    }
  };

  return (
    <InputContainer>
      <>
        <InputTitle
          onChange={handleTitle}
          type="text"
          value={title}
          placeholder="Title"
        />
      </>
      <>
        <InputValue
          onChange={handleValue}
          type="text"
          value={value}
          placeholder="Value"
        />
      </>
      <SaveBtn onClick={todoListAdd}>Save</SaveBtn>
    </InputContainer>
  );
};
export default TodoCreate;
//
const InputContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1120px;
  height: 65px;
  padding: 10px;
  margin: 41px 0 41px 0;
  border: none;
  border-radius: 9px;
  justify-content: center;
`;

const InputTitle = styled.input`
  width: 400px;
  height: 30px;
  margin-right: 33px;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 3px solid rgb(20, 20, 20);
  background-color: transparent;
  display: flex;
`;

const InputValue = styled.input`
  width: 400px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border: none;
  border-bottom: 3px solid rgb(20, 20, 20);
  background-color: transparent;
  display: flex;
`;

const SaveBtn = styled.button`
  width: 70px;
  height: 40px;
  justify-content: right;
  font-size: 21px;
  margin: 0px 0px 0 15px;
  border: none;
  background-color: transparent;
  color: rgb(20, 20, 20);
  font-weight: bold;
  cursor: pointer;
`;
