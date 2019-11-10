import styled from "styled-components";

export const Container = styled.div`
  width: 185px;
  height: 265px;
  display: flex;
  flex-direction: column;
  position: relative;
  img {
    height: 100%;
    width: 100%;
  }
  & > div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);

    p {
      color: #fff;
      font-size: 18px;
      letter-spacing: 1px;
    }
  }
`;
