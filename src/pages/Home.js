import Base from "../components/Base";
import {
  Row,
  Col,
  CardText,
  Button,
  Card,
  CardTitle,
  Container,
  CardBody,
  CardGroup,
  Label,
  Form,
  Input,
  FormGroup,
} from "reactstrap";
import "./home.css";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import {
  ComponentName,
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <Container className="mt-5">
        <Card className="firstcard">
          <CardBody className="firstcardbody">
            <CardTitle className="first1title">
              Feature Toggle and User Management Platform
            </CardTitle>
            <div className="firstdiv-btn">
              <Button
                className="first1but"
                onClick={() => navigate("/documentation")}
              >
                Get Start
              </Button>
            </div>
          </CardBody>
        </Card>
      </Container>

      <Container className="secondcontainer">
        <div className="seconddiv">
          <h4 className="secondh5">
            Unlock the Power of Feature Toggles and User Management
          </h4>
        </div>
        <div className="seconddiv2">
          <h6 className="secondh5">
            Take control of your application's features and user experience with
            our feature toggle and user management tools
          </h6>
        </div>
        <Row className="secondrow1">
          <Col sm="6" className="col1">
            <Card body className="second1">
              <CardTitle tag="h4">Feature Toggles</CardTitle>
              <CardText>
                Easily enable or disable features without deploying code
              </CardText>
            </Card>
          </Col>
          <Col sm="6" className="col1">
            <Card body className="second1">
              <CardTitle tag="h4">User Segmentation</CardTitle>
              <CardText>
                Target specific user groups with customized experiences
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row className="secondrow1">
          <Col sm="6" className="col2">
            <Card body className="second1">
              <CardTitle tag="h4">A/B Testing</CardTitle>
              <CardText>
                Experiment with different features to optimize user engagement
              </CardText>
            </Card>
          </Col>
          <Col sm="6" className="col2">
            <Card body className="second1">
              <CardTitle tag="h4">User Permissions</CardTitle>
              <CardText>
                Control access levels for different users within your
                application
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="thirdcontainer">
        <div className="thirddiv-1">
          <h5>PRICING</h5>
        </div>
        <div className="thirddiv-1">
          <p className="thirdpar-1">Choose the Right Plan for Your Team</p>
        </div>
        <div className="thirddiv-2">
          <p className="thirdpar-2">
            Unlock the full potential of feature toggles and user management
            with our flexible pricing options
          </p>
        </div>
        <CardGroup>
          <Card className="thirdcard">
            <CardBody className="thirdcardbody">
              <CardTitle tag="h4">FREE</CardTitle>
              <CardText className="cardtitle-cont">
                Ideal for small teams getting started with feature toggle and
                user mangament
              </CardText>
              <CardTitle tag="h5">$0</CardTitle>
              <Button className="thirddiv-btn">Free</Button>
            </CardBody>
          </Card>
          <Card className="thirdcard">
            <CardBody className="thirdcardbody">
              <CardTitle tag="h4">BASIC</CardTitle>
              <CardText className="cardtitle-cont">
                Great for growing teams looking for more advanced features
              </CardText>
              <CardTitle tag="h5">$31/month</CardTitle>
              <Button className="thirddiv-btn">Buy</Button>
            </CardBody>
          </Card>
          <Card className="thirdcard">
            <CardBody className="thirdcardbody">
              <CardTitle tag="h4">PRO</CardTitle>
              <CardText className="cardtitle-cont">
                Perfect for large teams needing enterprise-level capabilities
              </CardText>
              <CardTitle tag="h5">$99/month</CardTitle>
              <Button className="thirddiv-btn">Buy</Button>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>

      <Container className="fourthcont">
        <Row className="fourthrow">
          <Col className="fourthcol" xs="4">
            <p>FAQ</p>
            <h2>Common Question</h2>
            <p>Here are some of the most common question that we get</p>
          </Col>
          <Col className="fourthcol" xs="8">
            <h4>What is a feature Toggle?</h4>
            <p>
              It is a technique used in software development to enable or
              disable certain features or functionalities in an application
              without changing the codebase.{" "}
            </p>
            <h4>Why should I use feature toggles?</h4>
            <p>
              Feature toggles provide flexibility, agility, and control in
              managing feature releases, testing, and optimizing user
              experiences in modern software development processes.
            </p>
            <h4>How can I manage users on the platform?</h4>
            <p>
              Managing users on a platform involves several key aspects,
              including user authentication, user roles and permissions, user
              data management, and user interaction tracking.
            </p>
            <h4>Can I track user activity and behavior?</h4>
            <p>
              Yes, you can track user activity and behavior on your platform
              using various tools and techniques. Tracking user activity and
              behavior provides valuable insights into how users interact with
              your platform, what features they use most, and how they navigate
              through your application
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="feedbackformcont">
        <Row>
          <Col xs="7" className="feedbackcol1">
            <h3>Project Title</h3>
            <h6>Project Name Here</h6>
            <h3>Project Group Mentor</h3>
            <h6>Prof. Rajgure Sir</h6>
            <h3>Project Group Members</h3>
            <h6>Hardik S. Panchariya</h6>
            <h6>Hitesh V. Hadole</h6>
            <h6>Prajwal A. Patil</h6>
            <h6>Ritesh S. Gaygawali</h6>
          </Col>
          <Col xs="4" className="feedbackcol1">
            <h2>Contact us</h2>
            <Form className="feedbackform">
              <FormGroup>
                <Input
                  id="examplename"
                  name="name"
                  placeholder="Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  id="exampleText"
                  name="text"
                  placeholder="Text"
                  type="textarea"
                />
              </FormGroup>
              <Button className="feedback-btn">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <footer class="footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5  d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  OptiToggle
                </h6>
                <p>
                  OptiToggle is a technology company specializing in feature
                  management solutions. With a focus on security and seamless
                  user experience, OptiToggle empowers organizations to
                  streamline their software development and deployment
                  processes.
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/documentation" className="text-reset">
                    Documentation
                  </a>
                </p>
                <p>
                  <a
                    href="https://github.com/riteshgaigawali"
                    className="text-reset"
                  >
                    GitHub
                  </a>
                </p>
                <p>
                  <a href="#pricing" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#contact" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </footer>
    </Base>
  );
};

export default Home;
