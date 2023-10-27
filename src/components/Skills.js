import Carousel from 'react-bootstrap/Carousel';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return(
        <section className="skill" id="skills" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Welcome to the skills zone! Here, you'll find all the tools<br></br>  that power my coding adventures.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <Carousel.Item>
                            <div className="item1">
                            <div className="skill-name">C</div>
                            <div class="range" style={{'--p': '90'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">Java</div>
                            <div class="range" style={{'--p': '90'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">C#</div>
                            <div class="range" style={{'--p': '70'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">Unity</div>
                            <div class="range" style={{'--p': '60'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            </Carousel.Item>
                            <Carousel.Item>
                            <div className="item1">
                            <div className="skill-name">Web Dev</div>
                            <div class="range" style={{'--p': '55'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">Python</div>
                            <div class="range" style={{'--p': '65'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">MS Office</div>
                            <div class="range" style={{'--p': '90'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            <br></br>
                            <div className="item1">
                            <div className="skill-name">My SQL</div>
                            <div class="range" style={{'--p': '80'}}>
                                <div class="range__label"></div>
                            </div>
                            </div>
                            </Carousel.Item>
                            
                        </Carousel>
                    
                    </div>
                </div>
            </div>
        </div>
        
    </section>

    )
    }
