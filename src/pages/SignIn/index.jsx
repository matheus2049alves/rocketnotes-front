import { Container, Form, BackgroundImg } from "./style";
import { Button } from "../../components/button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"

import { useAuth } from "../../hook/auth";
import { useState } from "react";


export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Gerencie seus links úteis</p>
        <h2>Vem com a gente</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange = {e => setPassWord(e.target.value)}
        />

        <Button title={"Entrar"} onClick = {handleSignIn}/>

        <Link to="/register">
          Criar Contar
        </Link>

      </Form>
      <BackgroundImg />

    </Container>
  )
}