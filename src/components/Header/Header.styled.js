import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;
export const Button = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  & svg {
    width: 30px;
    height: 30px;
  }
`;
