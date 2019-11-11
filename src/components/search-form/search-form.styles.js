import styled from "styled-components";

import colors from "../../styles/colors";
import background from "../../assets/images/background-01.jpg";

export const Container = styled.div`
  min-height: ${props => props.height};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  padding: 30px;
  form {
    width: 50%;
    height: ${props => props.formHeight};
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  letter-spacing: 2px;
  color: ${colors.white};
  text-shadow: 0 1px 8px rgba(05, 05, 20, 0.9);
  margin: 15px 0;
`;
