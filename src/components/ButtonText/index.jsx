import { Container } from "./style";

export function ButtonText({title,isActive = false,...rest}){
  return (
    <Container tipe="button" isActive={isActive}>

      {title}
    </Container>

  )
}