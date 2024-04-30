import { useEffect } from "react"
import { useState } from "react"
import { getUsers } from "../services/api"

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then(data => setUsers(data))
    }, [])
    return (
        <ul>
            {users.map((user, i) => <li key={i}>{user.username}</li>)}
        </ul>
    )
}
export default Users