
import {Container, Links,Content} from "./style"
import { Button } from "../../components/button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import { api } from "../../services/api"


export function Details() {
  const navigate = useNavigate()
  const params = useParams()
  const [data,setData] = useState({})
  const [tagVerification, setTagVerification]  = useState(false)
  const [linkVerification,setLinkVerification] = useState(false)

  function handleBack(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja Realmente excluir a nota?")

    if (confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
  useEffect(() => {
    async function fetchNote(){
    
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
      
      setTagVerification(response.data.tags.length > 0)
      setLinkVerification(response.data.links.length > 0)
  
    }

    fetchNote()
  },[])

  
  
  return (
    <Container>
      <Header/>
      {data && 
        <main>
          <Content>
            <ButtonText 
            title={"Excluir nota"}
            onClick = {handleRemove}
             />
            <h1>
              {data.title}
            </h1>
            <p>
            {data.description}
            </p>

            {linkVerification &&
              <Section title={"Links úteis"}>
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            }
            {tagVerification &&(
            
              <Section title={"Marcadores"}>

                {data.tags.map(tag => (
                  
                     <Tag
                      title={tag.name}
                      key={String(tag.id)}
                      />
                ))}
              </Section>
            )
            } 
            
            <Button 
            title="voltar"
            onClick = {handleBack}
            />
          </Content>
            
        </main>
      }  
    </Container>
  )
}


