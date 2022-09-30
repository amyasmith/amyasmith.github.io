import './footer.css';
import Github from '../github.png';

function Footer(){
    return(
        <>
        <div id="footer">
            <img src={Github} id="github" href="https://github.com/amyasmith"></img>
        </div>
        </>
    )
}

export default Footer;