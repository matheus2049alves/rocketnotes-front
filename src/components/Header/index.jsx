import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";


export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/matheus2049alves.png" 
        alt="Foto de perfil" />

        <div>
          <span>Bem-Vindo,</span>
          <strong>Matheus Costa</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}