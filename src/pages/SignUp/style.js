import styled from "styled-components";
import Background from "../../assets/BackgroundImg.png"


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


`

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  >h1 {
    font-size: 48px;
    color: ${({theme}) => theme.Colors.ORANGE};
  }

  >h2 {
    font-size: 24px;
    margin: 48px 0;
    margin-bottom: 24px;
  }

  >p {
    font-size: 14px;
    color: ${({theme}) => theme.Colors.GRAY_100}
  }

  >a {
    margin-top: 50px;
    color: ${({theme}) => theme.Colors.ORANGE};
  }

`
export const BackgroundImg = styled.div`
  flex : 1;
  background: url(${Background}) no-repeat center;
  background-size: cover;



`