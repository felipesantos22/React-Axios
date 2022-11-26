import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
    const [post, setPost] = useState([])

    const getPost = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                // fetch('https://jsonplaceholder.typicode.com/posts')
                //     .then((response) => response.json())
                //     .then((json) => console.log(json));                
                const data = response.data;
                console.log(data)
        } catch (error) {
           console.log(error)
        }
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home