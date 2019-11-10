import styled from "styled-components";

export const Container = styled.div`
  height: 265px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Topbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
  background-color: #edf1f5;
  margin-bottom: 20px;
  padding: 5px 10px;
`;

export const Bottombar = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 10%;
`;

export const StarContainer = styled.div`
  display: flex;
  width: 18px;
  align-items: center;
  img {
    width: 100%;
    margin-right: 5px;
  }
`;

export const Overview = styled.p`
  padding: 10px;
  font-size: 16px;
  margin: 30px 0;
  background-color: #fefefe;
`;
