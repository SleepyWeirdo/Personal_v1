import styled from 'styled-components';
import theme from './theme';

const { colors, transition } = theme;

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${transition};
  cursor: pointer;
  color: ${colors.lightNavy};

  &:hover,
  &:focus,
  &:active {
    color: ${colors.yellow};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${colors.yellow};
    transition: ${transition};
  }
`;

export default InlineLink;
