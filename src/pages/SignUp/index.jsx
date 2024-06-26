import { useState } from "react";
import { Container, Form, BackgroundImg } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import {FiUser,FiMail,FiLock} from "react-icons/fi"
import { Link,useNavigate } from "react-router-dom";
import {api} from "../../services/api"

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
   if (!name || !password || !email){
    return (alert("preencha todos os campos"))
   }

   api.post("/users", {name,email,password})
   .then(() => {
    alert("usuário cadastrado com sucesso")
    navigate("/")
   }).catch(error => {
    if(error.response){
      alert(error.response.data.message)
    }else{
      alert("não foi possível cadastrar")
    }
   })
  }

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
          onChange = {e => setName(e.target.value)}
         />

        <Input
          placeholder = "E-mail"
          type = "text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value)}
         />

        <Input
          placeholder = "Senha"
          type = "password"
          icon={FiLock}
          onChange = {e => setPassword(e.target.value)}
         />

        <Button title="Cadastrar" onClick = {handleSignUp}/>

       <Link to={"/"}>Voltar para login</Link>

      </Form>
      
      
    </Container>
  )
}