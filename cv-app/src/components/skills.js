import ListGroup from 'react-bootstrap/ListGroup';
import './skills.css';

function SkillsList(){
    return(
        <>
            <div>
                <h3 data-aos="fade-up">Brief</h3>
                <p data-aos="fade-up">
                    I am a junior software developer with 3 years of professional experience looking to return to the workforce with a remote full-time position. I am passionate, driven, and ready to bring my skillset to a great team environment. I am available to hire ASAP with no notice period required. Below is a list of some of my competencies.
                </p>
            </div>
            <div style={{'height': '16px'}}></div>
            <div>
            <ListGroup variant="flush" >
                <ListGroup.Item data-aos="fade-left" id="listitem">• C# .NET in Desktop and Server settings</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Full-stack webdev with Node, Angular, React</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Linux Server Management and Cloud Service Upkeep</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Relational Databases e.g. MySQL</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Experienced in Java, PHP, C/C++</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Scripting in Lua and Python</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Hobby Game Development with Unity, Unreal Engine</ListGroup.Item>
                <ListGroup.Item data-aos="fade-left" id="listitem">• Microsoft Networking Fundamentals certification</ListGroup.Item>
            </ListGroup>
            </div>
        </>
    )
}

export default SkillsList;