import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import carousel1 from '../carousel5.jpg';
import carousel2 from '../carousel4.jpg';
import carousel3 from '../carousel3.jpg';

const imgStyle = {};

function VanityCarousel(){
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="" style={{imgStyle}} src={carousel3} alt="First slide"/>
                    <Carousel.Caption>
                        <h2>Full-Stack, Multi-Discipline</h2>
                        <p>Web and Desktop tenure, knowledge on major frameworks</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="" style={{imgStyle}}  src={carousel2} alt="First slide"/>
                    <Carousel.Caption>
                        <h2>Linux and Server</h2>
                        <p>Professional experience managing Unix and cloud installations</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="" style={{imgStyle}}  src={carousel1} alt="First slide"/>
                    <Carousel.Caption>
                        <h2>Motivation to Succeed</h2>
                        <p>I strive to make a great team player and deliver above and beyond</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default VanityCarousel;