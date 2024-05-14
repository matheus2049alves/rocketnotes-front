import styled from "styled-components";

 export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom: 1px solid ;
  border-bottom-color: ${({theme}) => theme.Colors.BACKGROUND_700} ;
 
  display: flex;
  justify-content: space-between;

  padding: 0 80px;
 `

 export const Profile = styled.div`
  display: flex;
  align-items: center;
 

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.Colors.GRAY_100}
    }

    strong {
      font-size: 18px;
      color: ${({theme}) => theme.Colors.WHITE}
    }
  }
 `

 export const Logout = styled.button`
  border: none;
  background: none;

 font-size: 36px;
  color: ${({theme}) => theme.Colors.GRAY_100};
 
 `