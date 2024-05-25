import React, { useContext } from 'react'
import ThemeContext from '../Context/Theme/ThemeContext'

const NewsCrad = ({news}) => {
  const { theme } = useContext(ThemeContext)
  return (

    <div className= {theme ? "col-lg-4 col-md-6 col-sm-12++ g-5 shadow" : "col-lg-4 col-md-6 col-sm-12 g-5 shadow bg-dark text-light"}>
      <div className={theme ? "card mx-5 bg-dark text-light" : "card mx-5"} id='card02'>
        <img src= {news.urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className= "card-text">
            <small>
              {news.author}
            </small>
          </p>
          <a href={news.url} target = "_blank" className="btn btn-secondary float-end">Read More</a>
  
        </div>
      </div>
    </div>

  )



}

export default NewsCrad