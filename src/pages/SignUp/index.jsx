import { Container, Form, BackgroundImg } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import {FiUser,FiMail,FiLock} from "react-icons/fi"


export function SignUp(){
  return(
    <Container>
      <BackgroundImg/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Gerencie seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input
          placeholder = "Nome"
          type = "text"
          icon={FiUser}
         />

        <Input
          placeholder = "E-mail"
          type = "text"
          icon={FiMail}
         />

        <Input
          placeholder = "Senha"
          type = "password"
          icon={FiLock}
         />

        <Button title={"Cadastrar"}/>

        <a href="#">Voltar para login</a>

      </Form>
      
      
    </Container>
  )
}