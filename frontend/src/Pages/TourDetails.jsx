import React from 'react'
import '../styles/tour-details.css'
import {Container,Row,Col,Form,ListGroup} from 'reactstrap'
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'

const TourDetails = () => {
  const {id}  = useParams()

  // this is an static data later we will call our api and load our data from  database

  const tour = tourData.find(tour=>tour.id === id)

  //destructure properties from tour object

  const {photo,title,desc,price,reviews,city,distance,maxGroupSize} = tour;
  return (
  <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className='tour__content'>
            <img src={photo} alt='' />

            <div className='tour__info'>
              <h2>{title}</h2>

              <div className='d-flex align-items-center gap-5'>
              <span className='tour__location d-flex align-items-center gap-1'>
                <i class="ri-star-fill"></i> {calculateAvgRating ===0 ? null : avgRating}
                {totalRating===0 ? 'Not rated' :<span>({reviews.length})</span> }
                
                </span>
              </div>
            </div>
          </div>
        
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default TourDetails