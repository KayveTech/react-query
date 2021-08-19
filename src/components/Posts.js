import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

import Post from './Post'

async function fetchPosts(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
    return data
}

function Posts(){
    const {data, error, isError, isLoading } = useQuery('posts', fetchPosts) // first argument is a string to cache and track the query result
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error! {error.message}</div>
    }

    return(
        <div className='container'>
        <Post/>
        <h1>Posts</h1>
        {
            data.map((post, index) => {
                return <li key={index}>{post.title}</li>
            })
        }

        </div>
    )
}

export default Posts
