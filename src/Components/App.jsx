import React, { useEffect, useState } from 'react'
import Card from './Card'

function App(){
    const [details, setDetails] = useState([])


    async function  fetchAPI() {
        const getURL = await fetch("https://randomuser.me/api/")
        const data = await getURL.json()
        console.log(data.results)
        setDetails(data.results)
    }
    useEffect(() =>{
        fetchAPI()
    },[])
    
    function handleClick(event) {
        event.preventDefault()
        event.target.value = fetchAPI()
    }

    return(
        <div>
            {details.map(detail =>{
                return(
                    <Card
                         key = {detail.id}
                        image = {detail.picture.large}
                        name = {detail.name.first}
                        email = {detail.email}
                        age = {detail.dob.age}
                        country = {detail.location.country}
                        phone = {detail.phone}
                        buttonClick = {handleClick}
                    />
                )
            })}
        </div>
    )
}
export default App