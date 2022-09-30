import { useEffect } from 'react';
import Topbar from './components/topbar.js';
import VanityCarousel from './components/carousel';
import SkillsList from './components/skills.js';
import QualCards from './components/qualcards.js';
import Footer from './components/footer.js';
import AOS from "aos";

import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const DarkStyle = {'background-color': '#222222'};

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="CV">
      <header className="CV-header">
        <Topbar></Topbar>
      </header>
      
      <div class="container col-sm-10 col-sm-offset-4" style={DarkStyle} id="maincolumn">
      <div style={{'height': '48px'}}></div>
        <div>
          <VanityCarousel></VanityCarousel>
        </div>
        <div style={{'height': '96px', 'position': 'relative'}}>
          <p id="scroll">SCROLL</p> 
        </div>
        <div class="container col-sm-11">
          <div>
            <SkillsList></SkillsList>
          </div>
          <div style={{'height': '48px'}}></div>
          <div>
            <QualCards style={DarkStyle}></QualCards>
          </div>
        </div>
        <div style={{'height': '48px'}}></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
