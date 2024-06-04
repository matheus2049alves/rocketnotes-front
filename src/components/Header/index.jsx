import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hook/auth";

export function Header(){
  const {signOut} = useAuth()
  return(
    <Container>
      <Profile to = {"/profile"}>
        <img src="https://github.com/matheus2049alves.png" 
        alt="Foto de perfil" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>Matheus Costa</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine/>
    
      </Logout>
    </Container>
  )
}