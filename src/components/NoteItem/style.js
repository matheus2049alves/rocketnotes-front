import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color:  ${({theme,isNew}) =>isNew ? "transparent" : theme.Colors.BACKGROUND_900};
  color:  ${({theme}) => theme.Colors.GRAY_300};


  border:  ${({theme,isNew}) =>isNew ? `1px dashed ${theme.Colors.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  .button-add {
    color :${({theme}) =>theme.Colors.ORANGE}
  }

  .button-delete {
    color:${({theme}) =>theme.Colors.RED}
  }

  >button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color:${({theme}) =>theme.Colors.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({theme}) =>theme.Colors.GRAY_300}
    }
  }
`
