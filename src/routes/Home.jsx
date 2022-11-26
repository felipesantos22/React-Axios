import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
    const [post, setPost] = useState([])

    const getPost = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")                    
            const data = response.data;
            console.log(data);
            setPost(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPost();
    },[]);

    return (
        <div>
            <h1>Ultimos posts</h1>
            {post.length === 0 ? (<p>Carregando...</p>) : (
                post.map((posts,index) =>(
                    <div className='post' key={posts.id}>
                    <h2>{posts.title}</h2>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home