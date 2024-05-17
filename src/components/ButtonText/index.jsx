import { Container } from "./style";

export function ButtonText({title,...rest}){
  return (
    <Container tipe="button">
      {title}
    </Container>

  )
}