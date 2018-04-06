import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: 10px 0;
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  margin-top: 5px;
  height: 150px;
`;

function TextArea({ label, name, placeholder = 'Optional' }) {
  return (
    <Wrapper>
      <StyledTextArea name={name} id={name} placeholder={placeholder} />
      <label>{label}</label>
    </Wrapper>
  );
}

export default TextArea;
