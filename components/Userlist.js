import { IconButton, List, ListItem, ListItemText } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from "@/firebase";
import { deleteDoc, doc } from "firebase/firestore";


const deleteUser = async (id, e)=>{
    e.stopPropagation();
    const docRef = doc(db,"ABC", id);
    await deleteDoc(docRef);
    Alert('error',`User with id ${id} deleted succesfully`);
}

const Userlist = ({id, name , email})=>{
    return(
        <ListItem
        sx = {{mt:3, boxshadow: 3}}
        style={{backgroundColor:'#FAFAFA'}}
        secondaryAction={
            <>
                <IconButton onClick={e=>deleteUser(id,e)}>
                    <DeleteIcon/>
                </IconButton>
            </>
        }
        >
            <ListItemText
                primary={`Name: ${name}`}
                secondary={`Email: ${email}`}
            >
            </ListItemText>
        </ListItem>
    )
}
export default Userlist