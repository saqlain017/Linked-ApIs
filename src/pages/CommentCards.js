import React from 'react'
import '../Styles/commentcard.css'
import { useQuery } from '@tanstack/react-query'
import avatar from '../images/Avatar.png'
import axios from 'axios'
const CommentCard = ()=>{
    const myId = localStorage.getItem("mid");
    const {data: specificId, isError, isLoading} = useQuery(['specificIdCard'],()=>{
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${myId}`).then((res)=>res.data)
    })
    if(isLoading){
        return <h1>Data Loading</h1>
    }
    if(isError){
        return <h1>Fetching Error</h1>
    }
    console.log(myId);
    return(
        <div className='CommentCard'>
            <div className="card">
                <img src={avatar} style={{width:80}} alt='avatar'/>
                <div className="card-content">
                    <h4>{specificId?.title}</h4>
                    <p>{specificId?.body}</p>
                </div>
            </div> 
        </div>
    )
}

export default CommentCard