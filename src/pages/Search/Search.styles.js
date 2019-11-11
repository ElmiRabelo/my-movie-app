import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid ${colors.dark};
  overflow: hidden;
`;
