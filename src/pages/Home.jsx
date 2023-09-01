import React from "react";
import { Provider } from "react-redux";
import store from "../modules/store";
//
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";
import { styled } from "styled-components";
//
const Home = () => {
  return (
    <Provider store={store}>
      <Wrap>
        <Header>
          <Title>:::todolist:::</Title>
          <Btn
            onClick={() => {
              alert(`
              Hanghae 99, 16th Class :: JinHyeok Yang, Goya Gim
              + + +
              Stack :: React JS, Vanilla Redux
              `);
            }}
          >
            about
          </Btn>
        </Header>
        <>
          <TodoCreate />
        </>
        <>
          <TodoList />
        </>
      </Wrap>
    </Provider>
  );
};
export default Home;
//
const Wrap = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 19px;
  padding: 0px 10px 10px 30px;
`;

const Header = styled.div`
  margin: 0 0 0px 11px;
  height: 55px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
`;

const Title = styled.h4`
  margin-top: 29px;
  font-size: 29px;
  color: rgb(20, 20, 20);
`;

const Btn = styled.button`
  margin: 29px 21px 0 0;
  width: 100px;
  height: 33px;
  font-size: 17px;
  justify-content: center;
  border: none;
  border-radius: 7px;
  background-color: rgb(20, 20, 20);
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
`;
