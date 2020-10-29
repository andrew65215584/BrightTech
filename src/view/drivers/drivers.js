import React, { useEffect, useState } from 'react'
import './drivers.css'

 const drivers = [
        { name: "Andrew", surname: "Borisovich", tel: "093 555 66 45" },
        { name: "Andrew", surname: "Alinovich", tel: "093 555 66 45" },
        { name: "Andrew", surname: "Abramovich", tel: "093 555 66 45" },
        { name: "Andrew", surname: "Volovich", tel: "093 555 66 45" },
        { name: "Andrew", surname: 'Koovich', tel: "093 555 66 45"  },
        { name: "Andrew", surname: "Amich", tel: "093 555 66 45" } ]


function Drivers() {
    const [value, setValue] = useState("")
    const [filteredDrivers, setfilteredDrivers] = useState(drivers)

   

    const handleChange = (evt) => {

        setValue(evt.target.value.toLowerCase())
        if (evt.target.value.length === 0) {
            setfilteredDrivers(drivers)
        }

    }
    
 
useEffect(() => {
    
    setfilteredDrivers(drivers.filter(el => el.surname.toLowerCase().includes(value)))
    

}, [value])



  
    return (
        <>
        <h2 className="drivers-title">Водители</h2>
            <label className="search-input">
                Поиск по фамилии
                <input type="text" onChange={handleChange}/>
            </label> 
        <ul className="drivers-list">
            { filteredDrivers.map((el, idx) => <li className="drivers-item" key={idx}> <span> {el.name}</span> <span>{el.surname}</span> <span>{el.tel}</span></li>)}
        </ul>
    </>
    )
}

export default Drivers
