import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  justify-items: center;
  width: 100%;
`;
