'use client';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Userlist from "./Userlist";

const Users = () => {
    const [ABC, setABC] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "ABC");
        const q = query(collectionRef, orderBy("name"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setABC(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        });

        return () => unsubscribe(); // Cleanup the listener on component unmount
    }, []);

    return (
        <div>
            {ABC.map(user => <Userlist key={user.id}
                id = {user.id}
                name = {user.name}
                email = {user.email}
            />)}
        </div>
    );
};

export default Users;
