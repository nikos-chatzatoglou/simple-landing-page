import styled  from 'styled-components';
import { FaAngleDown } from "react-icons/fa";

export const Container = styled.div`
background:linear-gradient(to top, #0B0B0B , #2C2C2C);
`;

  export const ImgContainer = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('US.png');
     
  @media(max-width: 600px) {
      background-image: url('US_mobile.png');
     }
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 330px;
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
    font-size: 2.2rem;
    color: #fff;
    text-align: center;
    margin: 0;
`;

export const Subtitle = styled.p `
    font-family: 'Raleway',sans-serif;
    font-weight: 100;
    font-size: 18px;
    color: #fff;
    text-align: center;
    margin-bottom: 25px;
`;

export const Chevron = styled(FaAngleDown)`
    color: #fff;
    font-size: 2rem;
    margin-bottom: 50px;
    transition: all 1s ease-in-out;
    &:hover {
        color: #913240;
    }
`;

export const Button = styled.button`
font-family: 'Raleway',sans-serif;
    font-weight: 400;
    background-color: transparent;
    color: #8A8A89;
    font-size: 1rem;
    padding: 0.5rem;
    border:1px solid #8A8A89;
    border-radius: 5px;
    width: 200px;
    cursor: pointer;
    transition: all 1s ease-in-out;
    &:hover {
        background-color: #1C1C1C;
        color: #913240;
    }
`;

export const Logo = styled.img`
margin-top: 19px;
margin-left: 86px;
width: 59.5px;
height: 59.5px;
 
  @media(max-width: 600px) {
      margin-left: 24px;
     }
`;

