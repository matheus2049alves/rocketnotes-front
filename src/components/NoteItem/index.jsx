import {FiPlus,FiX} from "react-icons/fi"
import {Container} from "./style"

export function NoteItem({isNew,value, onClick,...rest}){
  return(
    <Container isNew = {isNew}>
      <input type="text"
        value={value}
        readOnly = {!isNew}
        {...rest}
      />
      <button 
        className={isNew ? "button-add" : "button-delete"}
        type="button"
        onClick = {onClick}
      >
        {isNew ?  <FiPlus/> : <FiX/>} 
      </button>
      
      
    </Container>
  )
}