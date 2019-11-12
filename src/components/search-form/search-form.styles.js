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
  box-shadow: 0 3px 15px rgba(05, 05, 20, 0.9);
  form {
    width: 50%;
    height: ${props => props.formHeight};

    input {
      height: 100%;
      width: 100%;
      background-color: ${colors.light};
      border-radius: 5px;
      padding: 10px;
      margin: 10px;
      box-shadow: 0 1px 5px rgba(05, 05, 20, 0.7);
    }
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  letter-spacing: 2px;
  color: ${colors.white};
  text-shadow: 0 1px 8px rgba(05, 05, 20, 0.9);
  margin: 15px 0;
`;
