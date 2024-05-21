import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;


  background-color:  ${({theme}) => theme.Colors.BACKGROUND_900};
  color:  ${({theme}) => theme.Colors.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color:  ${({theme}) => theme.Colors.GRAY_300};
  }

  ;

` 