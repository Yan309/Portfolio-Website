import { Container, Row, Col, Card } from "react-bootstrap";
import RYS from "../resources/images/Ride Your Style.jpg"
import mp3 from "../resources/images/mp3.jpg"
import sec from "../resources/images/sec.jpg"

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <div className="proj-bx">
                    <h2>Projects</h2>
                    <p className="descrip">Arsenal of my Projects at your disposal!</p>
                    <Row>
                        <Col md={4} sm={6} xs={12}>
                <div className="card-container">
    <Card>
        <div class="card">
            <div class="face face1">
                <div class="content-img">
                    <img src={RYS}/>
                    
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Ride Your Style</p>
                    <p style={{fontSize: 17}}>Java Window Application</p>
                        <a href="Ride Your Style-OOP Semester Project.pdf" download="Ride Your Style Documentation (OOP Project)">Read More</a>
                </div>
            </div>
        </div>
        </Card>
        <Card>
        <div class="card">
            <div class="face face1">
                <div class="content-img">
                    <img src={mp3}/>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>MP3 Player</p>
                    <p style={{fontSize: 17}}>Java Window Application</p>
                        <a href="MP3 DSA project docs.pdf"download="MP3 Player Documentation (DSA Project)">Read More</a>
                </div>
            </div>
        </div>
        </Card>
        <Card>
        <div class="card">
            <div class="face face1">
                <div class="content-img">
                    <img src={sec}/>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Health Center Management System</p>
                    <p style={{fontSize: 17}}>Documentation using SEC</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        </Card>
        </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            
        </section>
    );
}
