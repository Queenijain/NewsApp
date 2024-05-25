import React, { useContext, useEffect } from 'react'
import ThemeContext from '../Context/Theme/ThemeContext'
import Carosal from '../Components/Carosal'
import TrendingNews from '../Components/TrendingNews'
import WeatherSec from '../Components/WeatherSec'
import NewsCrad from '../Components/NewsCrad'
import NewsContext from '../Context/News/NewsContext'
import { fetchNews } from '../Context/News/NewsAction'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  const { allNews, dispatch } = useContext(NewsContext)


  const getNews = async() =>{
   const data = await fetchNews("India");
   dispatch({
    type : "GET_NEWS",
    payload : data,
   })
  }

  useEffect(()=>{
    getNews()
  },[])
  return (
    <div className={theme ? "container-fluid shadow py-1" : "container-fluid py-1 bg-dark shadow text-light"}>
      <Carosal />
      <TrendingNews />
      <WeatherSec />

      <div className="row">
        {
         !allNews || allNews.length === 0 ? (
          <h1 className=' text-center my-4'>LOADING...</h1>
         ) : ( allNews?.map((news, index) => (<NewsCrad key={index} news={news} />)))
        }
      </div>
    </div>

  )
}

export default Home