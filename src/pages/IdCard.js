import React, { useState, useEffect } from 'react'
import '../Styles/idcard.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import MyCarousel from '../components/Carousel'
import avatar from '../images/Avatar.png'
import { Link } from 'react-router-dom'
import Pricing from '../components/Pricing'
import Pagination from './Pagination'
const IdCard = ()=>{
    const {data:userComments , isError, isLoading} = useQuery(['comments'],()=>{
        return axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>res.data)

    })
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;
  const totalPages = Math.ceil(userComments?.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = userComments?.slice(indexOfFirstCard, indexOfLastCard);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  if(isLoading){
      return <h1>Data Loading</h1>
  }
  if(isError){
      return <h1>Fetching Error</h1>
  }
    return(
        <>
        <MyCarousel />
        <div className="container">
        <h4>Traveller's Feedback</h4>
        <div className='IdCard'>
            {currentCards.map((card)=>{
                return  <Link to='/idDetails' key={card?.id} onClick={()=>{localStorage.setItem("mid",card?.id)}}>
                            <div className="card">
                                <img src={avatar} style={{width:80}} alt='avatar'/>
                                    <div className="card-content">
                                <h4>{card?.title}</h4>
                                </div>
                            </div>

                        </Link>                       
            })}
        </div>   
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onNextPage={handleNextPage} onPrevPage={handlePrevPage}/>
        <Pricing />
        </>
    )
}

export default IdCard