import styled  from 'styled-components';
import { FaAngleDown } from "react-icons/fa";

export const Wrapper = styled.div`
  background: url('US.png'),linear-gradient(to top, #0B0B0B , #2C2C2C);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  @media(max-width: 1024px) {
    background: url('US_mobile.png'),linear-gradient(to top, #0B0B0B , #2C2C2C);
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain;
     }

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 150px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h2`
    font-family: 'Raleway',sans-serif;
    font-weight: 700;
    font-size: 44px;
    color: #fff;
    text-align: center;
    margin: 0;
`;

export const Subtitle = styled.p `
    font-family: 'Raleway',sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
`;

export const Chevron = styled(FaAngleDown)`
    font-size: 30px;
    margin-bottom: 45px;
    color: #fff;
    transition: all 1s ease-in-out;
    &:hover {
        color: #913240;
    }
`;

export const Button = styled.button`
    font-family: 'Raleway',sans-serif;
    font-size: 16px;
    font-weight: 700;
    background-color: transparent;
    color: #8A8A89;
    padding: 6px 0  6px 0 ;
    border: 1px solid #8A8A89;
    border-radius: 5px;
    width: 175px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    &:hover {
        background-color: #1C1C1C;
        color: #913240;
    }
`;

export const Logo = styled.img`
    margin-top: 20.5px;
    margin-left: 95px;
    width: 65px;
    height: 65px;
    @media(max-width: 1024px) {
        margin-left: 24px;
        width: 45px;
        height: 45px;
     }
`;

