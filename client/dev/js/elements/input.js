import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 10px 0;
`;

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  margin-top: 5px;
  border: 1px solid black;
`;

function Input({ label, name, type, placeholder = 'Optional' }) {
  return (
    <Wrapper>
      <StyledInput type={type} id={name} name={name} placeholder={placeholder} />
      <label>{label}</label>
    </Wrapper>
  );
}

export default Input;
