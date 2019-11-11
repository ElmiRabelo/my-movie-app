import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 30px 0;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  justify-items: center;
  width: 100%;
`;
