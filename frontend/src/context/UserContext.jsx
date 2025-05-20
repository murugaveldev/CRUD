import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/users/allusers");
            console.log(res.data);
            setUsers(res.data.users);
        } catch (err) {
            console.error(err);
        }
    };


    const createUser = async (userData) => {
        try {
            await axios.post("http://localhost:8000/api/users/createuser", userData)
            fetchUsers();
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateUser = async (id, userData) => {
        try {

            await axios.put(`http://localhost:8000/api/users/updateuser/${id}`, userData)
            fetchUsers(); // refresh list
            setEditingUser(null);
        } catch (error) {
            console.log(error.message)
        }
    }


    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8000/api/users/deleteuser/${id}`)
        
        fetchUsers(); // refresh list
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, createUser, updateUser, deleteUser, editingUser, setEditingUser }}>
            {children}
        </UserContext.Provider>
    );
};
