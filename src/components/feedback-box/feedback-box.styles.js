import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${props => props.color};
  color: #222;
`;
