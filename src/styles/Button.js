import styled from 'styled-components';
import theme from './theme';

const {colors, fontSizes, fonts, weight, borderRadius} = theme;
const btnWidth = 200;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.Nunito};
  text-decoration: none;
  min-width: ${btnWidth}px;
  padding: 10px 30px;
  background: ${colors.darkNavy};
  border-radius: ${borderRadius};
  border: 1px solid ${colors.yellow};
  color: ${colors.yellow};
  font-size: ${fontSizes.lightNavy};
  font-weight: ${weight.semiBold};
  
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  /* ${({ theme }) => theme.media.tablet} {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  } */

  :hover,
  :focus,
  :active {
    background: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.dark};
  }
`;

export default Button;