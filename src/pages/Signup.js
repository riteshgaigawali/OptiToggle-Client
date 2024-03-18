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
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { singUp } from "../services/user-service";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailid: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    singUp(data)
      .then((resp) => {
        toast.success("User registered sucessfully !");
        setData({
          firstName: "",
          lastName: "",
          emailid: "",
          password: "",
        });
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h5>Fill the information to register.</h5>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="firstName">Enter first name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your first name"
                      id="firstName"
                      onChange={(e) => handleChange(e, "firstName")}
                      value={data.firstName}
                      invalid={
                        error.errors?.response?.data?.lastName ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.firstName}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="lastName">Enter last name</Label>
                    <Input
                      type="text"
                      placeholder="Enter your last name"
                      id="lastName"
                      onChange={(e) => handleChange(e, "lastName")}
                      value={data.lastName}
                      invalid={
                        error.errors?.response?.data?.lastName ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.lastName}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="emailid">Enter email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="emailid"
                      onChange={(e) => handleChange(e, "emailid")}
                      value={data.emailid}
                      invalid={
                        error.errors?.response?.data?.emailid ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.emailid}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                      invalid={
                        error.errors?.response?.data?.password ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.password}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center mt-5">
                    <Button color="light" outline>
                      SingUp
                    </Button>
                    <CardLink tag={ReactLink} to="/login">
                      <h6>Already have an account ! Login</h6>
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

export default Signup;
