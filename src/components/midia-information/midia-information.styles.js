import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  height: 265px;
  min-width: 200px;
  background-color: ${colors.light};
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
  background-color: ${colors.auxiliar};
  margin-bottom: 20px;
  padding: 5px 10px;
`;

export const Bottombar = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 10%;
  background-color: ${colors.auxiliar};
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
  font-size: 13px;
  margin: 30px 0;
  overflow-y: hidden;
  text-align: justify;
  text-justify: inter-word;
`;
