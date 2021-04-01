import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                Kerala Hindus of North America is the premier national organization for Hindus from Kerala.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/quotebg.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "The great secret of true success, of true happiness, is this: 
                      the man or woman who asks for no return, the perfectly unselfish person, 
                      is the most successful." <br></br>
                      <br></br>
                      <small>-Swami Vivekananda</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/TatvaTalks.jpeg") + ")",
                    }}
                  ></div>
                  <br></br><br></br>
                  <h3>
                    Tatva Talks
                  </h3>
                  <p>
                  Tatva Talks is a series that explores Hinduism, culture and identity through the lens of indigenous 
                  narratives. Through this series, we hope to explore Hindu and Indic topics from the perspective of 
                  practicing Hindus. We strive to foster apolitical academic discourse and dialogue on a variety of dharmic topics.
                  </p>
                  <p>
                  Check it out on Youtube or your favorite podcast streaming service, and stay tuned for our next episode!
                  </p>
                  
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/deeksha.jpeg") + ")",
                    }}
                  ></div>
                  <br></br>
                  <h3>
                    Deeksha
                  </h3>
                  <p>
                  Deeksha, a KHNA Youth mentorship initiative, is geared towards students ages 16+, professionals, 
                  or academics to provide and receive advice as mentors or mentees. The aim is to foster one-on-one 
                  relationships depending on your field of interest or expertise, while forging a deeper connection 
                  to a professional from your community. 
                  </p>     
                  <p>
                  We are currently taking applications to be either a mentee or mentor. 
                  <a href="https://forms.gle/iFp9Xpm57EyZfgX79" onClick={(e) => e.preventDefault()}>
                        Sign up here!
                      </a>{" "}
                    </p>            
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to get in touch with us?</h2>
            <p className="description">Let us know!</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
