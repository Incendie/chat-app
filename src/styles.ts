import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 36px auto;
  width: 1920px;
`;

export const StyledHeader = styled.header`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.darkgreen};
  padding: 12px 0;
`;