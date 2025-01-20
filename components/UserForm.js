import { db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { use, useState } from "react"

const { TextField, Button } = require("@mui/material")

const UserForm = ()=>{
    const[user, setUser]= useState({name:'' ,email:''})
    const onSubmit = async()=>{
        const collectionRef = collection(db, "ABC")
        const docRef = await addDoc(collectionRef,{...user})
        setUser({name:'',email:''})
        alert(`User with id ${docRef.id} is added succesfully`)

    }
    return(
        <div>
            <TextField fullWidth label="name" margin="normal"
                value={user.name}
                onChange={e=>setUser({...user, name: e.target.value})}
            />
            <TextField fullWidth label="email"
                value={user.email}
                onChange={e=>setUser({...user,email:e.target.value})}
            />
            <Button onClick={onSubmit} variant= "contained"sx={{mt : 3}}>Add New User</Button>
        </div>
    )
}
export default UserForm