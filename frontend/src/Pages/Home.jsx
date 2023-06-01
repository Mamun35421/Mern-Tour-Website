import React from 'react'
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../Shared/Subtitle';
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../Components/Featured-tour/FeaturedTourList';


const Home = () => {
  return (
    <>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
              <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt='' />
              </div>
              <h1>
                Travels opens  the door to creating{""}
                <span className='highlight'> memorise</span>
              </h1>

              <p>
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, 
              by injected humour, suffered alteration in some form, 
              by injected humour, by injected humour, by injected 
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className='hero__img-box'>
              <img src={heroImg} alt='' />
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-4'>
              <video src={heroVideo} alt='' controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className='hero__img-box mt-5'>
              <img src={heroImg02} alt='' />
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>

    
    {/*Hero section start */}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/*=========== Featured tour section start ====================*/}
    <section>
      <Container>
      <Row>
        <Col lg="12" className='mb-5'>
          <Subtitle subtitle={"Explore"} />
          <h2 className='featured__tour-title'>Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
      </Container>
    </section>




    {/*=========== Featured tour section end ====================*/}


    
    </>
  )
}

export default Home