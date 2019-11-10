import styled from "styled-components";

export const Container = styled.div`
  height: 265px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  &:first-child {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
  }

  p {
    padding: 10px;
    font-size: 16px;
    margin: 20px 0;
  }
`;
