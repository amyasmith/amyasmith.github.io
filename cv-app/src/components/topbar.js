import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './topbar.css';


function Topbar(){
    return(
       <>
        <Navbar id="navbar">
        <Container>
          <Navbar.Brand id="navbar">
            Amy Smith
          </Navbar.Brand>
          <div class="reactflair">
            Created with React
          </div>
        </Container>
        </Navbar>
      </>
    )
}

export default Topbar;