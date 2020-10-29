import React, { useEffect, useState } from 'react'
import './users.css'

const users = [
    { name: "Andrew", email: "andrew@gmail.com" },
    { name: "Bohdan", email: "andrew@gmail.com" },
    { name: "Denis", email: "andrew@gmail.com" },
    { name: "Pavel", email: "andrew@gmail.com" },
    { name: "Ivan", email: "andrew@gmail.com" },
    { name: "Nikitos", email: "andrew@gmail.com" }]



function Users() {

    const [value, setValue] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(users)
 
    const handleChange = (evt) => {

        setValue(evt.target.value.toLowerCase())

        if (evt.target.value.length === 0) {
            setFilteredUsers(users)
        }
    }
    
 
    useEffect(() => {
        setFilteredUsers(users.filter(el => el.name.toLowerCase().includes(value)))
    }, [value])

    return (
        <>
            <h2 className="users-title"> Пользователи</h2>
            
            <label className="search-input">
                Поиск по фамилии
                <input type="text" onChange={handleChange}/>
            </label> 
            <ul className="users-list">
                {filteredUsers.map((el , idx) => <li className="users-item" key={idx}> <span> {el.name}</span> <span>{el.email}</span></li>)}
            </ul>
        </>
    )
}

export default Users
