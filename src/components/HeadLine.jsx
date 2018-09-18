import React from 'react';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  display: flex;
  font-size: 7em;
  margin-top: 300px;
  justify-content: center;
  align-items: flex-end;
  color: white;
`;

const HeadLine = ({ title }) => (
  <WrapperHeader>
    {title}
  </WrapperHeader>
);
export default HeadLine;
