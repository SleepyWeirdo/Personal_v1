import styled from 'styled-components';
import theme from './theme';

const {colors, weight} = theme;

export const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
  color: ${({ isHighlight }) => (isHighlight ? colors.yellow : colors.white)};
  line-height: normal;
  margin: 0;
`;

export const Text = styled.div`
  font-size: ${({ heading }) => (heading ? '2.4rem' : '1.8rem')};
  color: ${({ heading }) => (heading ? colors.yellow : colors.lightNavy)};
  font-weight: ${({ heading }) => (heading ? weight.semiBold : weight.regular)};
`;
