import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  padding: 10px 15px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
  color: #000;

  button {
    background-color: transparent;
    padding: 5px;
    margin-left: 20px;
    cursor: pointer;
  }
`;
