import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;

  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;
`;

export const Error = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.red};
`;
