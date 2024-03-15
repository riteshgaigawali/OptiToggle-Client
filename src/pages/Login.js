import { NavLink as ReactLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../components/Base";
import { useState } from "react";
const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h5>Fill the information to login.</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="emailid">Enter email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="emailid"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                    />
                  </FormGroup>
                  <Container className="text-center mt-5">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <CardLink tag={ReactLink} to="/signup">
                      <h6>I don't have an account !</h6>
                    </CardLink>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
