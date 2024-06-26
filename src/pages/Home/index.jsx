import {Container, Brand, Menu,Search, Content, NewNote} from "./style"
import {Header} from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { FiPlus } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { useEffect,useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function Home(){
  const navigate = useNavigate()
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const [search, setSearch] = useState("")

  function handleTagsSelected(tagName){

    if (tagName == "all"){
      return setTagsSelected([])
    }
    const alreadySelectedTag = tagsSelected.includes(tagName)

    if(alreadySelectedTag){
      setTagsSelected(previousState => previousState.filter(tag => tag != tagName))
    }else{
      setTagsSelected(previousState => [...previousState, tagName])
    }
    
  }
  
  useEffect(() => {
    async function fetchTags(){
      const response = await api.get('tags')
      setTags(response.data)
    
    }

    fetchTags()
  },[])

  function handleToDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
      console.log(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return(
    <Container>
      <Brand><h1>Rocketnotes</h1></Brand>
      <Header></Header>

      <Menu>
        <li>
          <ButtonText title={"Todos"} 
          onClick = {() => handleTagsSelected("all")}
          isActive = {tagsSelected.length === 0}/>
          </li>

        {tags && tags.map((tag) => 
          <li key={tag.id}>
            <ButtonText
             title={tag.name}
             onClick = {() => handleTagsSelected(tag.name)}
             isActive = {tagsSelected.includes(tag.name)}
             />
          </li>
        )}
       
      
      </Menu>

      <Search>
         <Input
          placeholder = {"Pesquisar pelo título"}
          onChange = {e => setSearch(e.target.value)}
          />
         
      </Search>
      
      <Content>
        <Section title={"Minhas Notas"}>
          {notes.map(note =>
            <Note 
              key={note.id}
              data={note}
              onClick = {() => handleToDetails(note.id)}

            />
          )
        }
          
         
        
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus/>
        Nova Nota 
      </NewNote>
    </Container>
  )
}

