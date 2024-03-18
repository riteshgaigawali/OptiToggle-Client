import { NavLink as ReactLink, useNavigate } from "react-router-dom";
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
import { toast } from "react-toastify";
import { loginUser } from "../services/user-service";
import { doLogin, doLogout } from "../auth";
const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetails);
    if (
      loginDetails.username.trim() == "" ||
      loginDetails.password.trim() == ""
    ) {
      toast.error("Username and Password is required !");
      return;
    }
    loginUser(loginDetails)
      .then((data) => {
        console.log(data);
        doLogin(data, () => {
          console.log("login details stored to localStorage !");
          navigate("/user/admin-dashboard");
        });
        toast.success("User logged in successfuly !");
        setLoginDetails({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.messege);
        } else {
          toast.error("Something went wrong !");
        }
      });
  };
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
                <Form onSubmit={handleFormSubmit}>
                  <FormGroup>
                    <Label for="username">Enter email</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      id="username"
                      value={loginDetails.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      value={loginDetails.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>
                  <Container className="text-center mt-5">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <CardLink tag={ReactLink} to="/signup">
                      <h6>I don't have an account ! SignUp</h6>
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
