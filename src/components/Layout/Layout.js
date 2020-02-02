import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const {colors, fonts} = theme;

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: ${fonts.Nunito};
  color: ${colors.lightNavy};
  background: ${colors.darkNavy};
  font-size: 10px;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  position: fixed;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  background: ${({ scrolled }) => (scrolled ? colors.lightNavy : colors.darkNavy)};
`;

const Container = styled.div`

`;

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header>LOL</Header>
      <StyledWrapper>
        <Container>{children}</Container>
      </StyledWrapper>
    </>
  </ThemeProvider>
);
