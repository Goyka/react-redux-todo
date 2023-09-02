import React from "react";
import { styled } from "styled-components";
//

const ModalWrap = styled.div`
  margin: 29px 21px 0 10px;
  padding: 11px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
  border-radius: 13px;
  width: 500px;
  height: 145px;
  background-color: black;
  opacity: 80%;
`;
const ModalTitle = styled.h3`
  margin-top: 65px;
  font-weight: bold;
  font-size: 21px;
`;
const ModalBtn = styled.button`
  float: right;
  width: 97px;
  height: 29px;
  font-size: 17px;
  justify-content: center;
  border: none;
  border-radius: 7px;
  background-color: whitesmoke;
  color: rgb(20, 20, 20);
  font-weight: bold;
  cursor: pointer;
`;

function Modal({ isOpen, closeModal }) {
  return (
    <ModalWrap style={{ display: isOpen ? "block" : "none" }}>
      <ModalBtn onClick={closeModal}>Close</ModalBtn>
      <ModalTitle>Hanghae 99, Clase 16th : Jinhyeok Yang, Goya Gim</ModalTitle>
    </ModalWrap>
  );
}

export default Modal;
