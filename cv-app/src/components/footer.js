import './footer.css';
import Github from '../github.png';

function Footer(){
    return(
        <>
        <div id="footer">
            <img src={Github} id="github" href="https://github.com/amyasmith" alt="Github logo"></img>
        </div>
        </>
    )
}

export default Footer;