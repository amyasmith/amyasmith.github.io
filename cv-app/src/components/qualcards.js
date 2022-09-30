import Card from 'react-bootstrap/Card';
import Kainos from '../kainos.jpg';
import UUJ from '../uuj.jpg';
import './qualcards.css';

function QualCards(){
    return(
        <>
            <div class="row" >
                <div class="col-sm">
                    <Card id="cards" data-aos="fade-up">
                        <Card.Img src={Kainos} alt="Kainos Image" id="cardimg"/>
                        <Card.ImgOverlay>
                            <div id="overlay">
                                <Card.Title id="cardtext">Kainos</Card.Title>
                                <Card.Text id="cardtext">
                                    I was employed as Apprentice Software Engineer at Kainos, working on their HMPPS team and the flagship Evolve project.
                                </Card.Text>
                                <Card.Text id="cardtext">2018–2021</Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div class="col-sm">
                    <Card id="cards" data-aos="fade-up">
                        <Card.Img src={UUJ} alt="UUJ Image" id="cardimg"/>
                        <Card.ImgOverlay>
                            <div id="overlay">
                                <Card.Title id="cardtext">Ulster University</Card.Title>
                                <Card.Text id="cardtext">
                                    I am set to complete a BSc in Computing Systems at Ulster University within the next year.
                                </Card.Text>
                                <Card.Text id="cardtext">Graduating est. 2023</Card.Text>
                            </div>
                        </Card.ImgOverlay>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default QualCards;