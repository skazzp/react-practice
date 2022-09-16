import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  background-color: lightgray;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 8px;
  position: relative;
`;
export const Label = styled.label`
  padding: 12px;
  border-bottom: 2px solid darkgray;
`;
export const InputTitle = styled.p`
  color: black;
  margin-bottom: 8px;
  font-size: 12px;
`;
export const Input = styled.input`
  border: none;
  font-size: 22px;
  background: none;
  color: darkblue;
`;
export const Submit = styled.button`
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  bottom: calc(100% + 12px);
  right: 15px;
  & svg {
    width: 50px;
    height: 50px;
  }
`;
