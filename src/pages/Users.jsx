import { useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"


function Users() {
    const [info, setInfo] = useState({});

    const {id} = useParams();
    async function fetchProfileInfo() {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setInfo(data);
    }

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    return(
        <div>
            <Link to={`/`}>Go Back</Link>
            <h3>Name: {info?.name}</h3>
            <h3>Email: {info?.email}</h3>
            <h3>Username: {info?.username}</h3>
        </div>
    );
}

export default Users;