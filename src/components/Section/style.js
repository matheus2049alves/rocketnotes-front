import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  border-bottom: 1px solid;
  border-bottom-color: ${({theme}) => theme.Colors.BACKGROUND_700};

  > h2 {
    padding-bottom: 16px;
    margin-bottom: 28px;

    color:  ${({theme}) => theme.Colors.GRAY_100};

    font-size: 20px;
    font-weight: 400;
  }
  
`
