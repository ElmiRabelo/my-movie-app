import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 10px;
  background-color: #edf1f5;
  em {
    font-size: 16px;
    margin-right: 8px;
  }
  img {
    width: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
