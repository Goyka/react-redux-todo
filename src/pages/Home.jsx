import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import TodoCreate from "../components/TodoCreate";
import TodoList from "../components/TodoList";

import Modal from "../components/Modal";
//
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Wrap>
      <Header>
        <Title>:::todolist:::</Title>
        <Btn
          onClick={openModal}
          style={{ display: isModalOpen ? "none" : "block" }}
        >
          about
        </Btn>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </Header>
      <>
        <TodoCreate />
      </>
      <>
        <TodoList />
      </>
    </Wrap>
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
  z-index: -1;
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
`;
