import React from "react";
import { Provider } from "react-redux";
import store from "../modules/store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
//
const TodoDetail = () => {
  const detailTodos = useSelector((state) => state.detailTodos);
  return (
    <Provider store={store}>
      <DetailWrap>
        <DetailHeader>
          <h4>data number → {detailTodos.id}</h4>
          <Backward to="/">❮ back</Backward>
        </DetailHeader>
        <>
          <DetailTitle>{detailTodos.title}</DetailTitle>
          <DetailValue>{detailTodos.value}</DetailValue>
        </>
      </DetailWrap>
    </Provider>
  );
};
export default TodoDetail;
//

const DetailWrap = styled.div`
  background-color: whitesmoke;
  border-radius: 9px;
  display: block;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: auto;
  width: 500px;
  height: 300px;
  padding: 19px;
  box-shadow: 11px 11px 11px 0px rgb(233, 233, 233);
`;
const DetailHeader = styled.div`
  color: rgb(20, 20, 20);
  font-weight: bold;
  font-size: 19px;
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  margin: -27px 0 0 0;
`;

const Backward = styled(Link)`
  color: rgb(20, 20, 20);
  margin: 25px 0 0 0;
  font-size: 17px;
`;

const DetailTitle = styled.div`
  padding: 11px;
  font-size: 41px;
  font-weight: bold;
  margin: 55px 0 0 0;
`;

const DetailValue = styled.p`
  font-size: 19px;
  font-weight: bold;
  margin: 5px 0 0 0;
`;
