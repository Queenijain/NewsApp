import React from 'react'
import Logo1 from '../assets/img-E.jpg'
import Logo2 from '../assets/img-P.jpg'
import Logo3 from '../assets/img-SSS.webp'

const Carosal = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Logo1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Logo2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Logo3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carosal;