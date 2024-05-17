import styled from "styled-components";

export const  Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px ;

  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";

  background-color: ${({theme}) => theme.Colors.BACKGROUND_800};

`
export const  Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid;
  border-bottom-color:${({theme}) => theme.Colors.BACKGROUND_700} ;

  background-color: ${({theme}) => theme.Colors.BACKGROUND_900};

  >h1 {
    font-size: 24px;
    color: ${({theme}) => theme.Colors.ORANGE};
  }

`
export const  Menu = styled.ul`
  grid-area: menu;
  background-color: violet; 

`
export const  Search = styled.div`
  grid-area: search;
  background-color: red;

`
export const  Content = styled.div`
  grid-area: content;
  background-color: pink;

`
export const  NewNote = styled.button`
  grid-area: newnote;
  background-color: brown;

`
