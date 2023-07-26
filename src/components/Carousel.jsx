import React from 'react'
import '../Styles/Carousel.css'
import place1 from '../images/destination (1).jpg'
import place2 from '../images/destination (2).jpg'
import place3 from '../images/destination (3).jpg'
import place4 from '../images/destination (4).jpg'
const MyCarousel = ()=>{

    return(
        <section id="featureCase" className="my-5 pb-4">
      <div className="container">
        <h4>Featured Case Studies</h4>
        <div id="carouselExampleDark" className="carousel carousel-dark slide my-5" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item" data-bs-interval="10000">
              <div className="myCarousel-item d-flex justify-content-around align-items-center gap-5">
                <img src={place1} width="337" height="200" className="d-block" alt="..." />
              <div className="myCarousel-text">
                <h6>Industry: Education</h6>
                education
                <p>iCreativez works with clients in the education, edtech, and edutainment industries to create more impactful digital learning experiences. Drawing from our expertise in mobile, gamification, and cognitive design, we help our clients achieve real results for the students they serve.</p>
                <a href="javascript:void(0)" className="text-decoration-none"> View Case Study</a>
              </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="myCarousel-item d-flex justify-content-around align-items-center gap-5">
                <img src={place2} width="337" height="200" className="d-block" alt="..." />
              <div className="myCarousel-text">
                <h6>Industry: Finance</h6>
                finance
                <p>From community banks to global payment processors, financial services firms of all kinds understand that providing digital tools to their customers is no longer optional. By securing customer loyalty and increasing customer retention, successful digital tools drive revenue and accelerate growth.</p>
                <a href="javascript:void(0)" className="text-decoration-none"> View Case Study</a>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="myCarousel-item d-flex justify-content-around align-items-center gap-5">
                <img src={place3} width="337" height="200" className="d-block" alt="..." />
              <div className="myCarousel-text">
                <h6>Industry: Technology</h6>   
                technology
                <p>Digital technology has ushered in an age of profound transformation. Organizations are under pressure to change business processes and models to keep pace. Leading executives are transforming customer experience, operational processes and business models..</p>
                <a href="javascript:void(0)" className="text-decoration-none"> View Case Study</a>
              </div>
              </div>
            </div>
            <div className="carousel-item active">
              <div className="myCarousel-item d-flex justify-content-around align-items-center gap-5">
                <img src={place4} width="337" height="200" className="d-block" alt="..." />
              <div className="myCarousel-text">
                <h6>Industry: Social Radar</h6>
                social radar
                <p>SocialRadar, a hot, new, location-based mobile social platform, sought a highly flexible partner that could help take their concept to Version 1.0 most efficiently. iCreativez unique experience in the design and development of mobile apps, along with our vast...</p>
                <a href="javascript:void(0)" className="text-decoration-none"> View Case Study</a>
              </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    )
}

export default MyCarousel