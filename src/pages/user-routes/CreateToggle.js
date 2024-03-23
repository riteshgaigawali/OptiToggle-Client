import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
  ButtonGroup,
} from "reactstrap";
import Base from "../../components/Base";
import { toast } from "react-toastify";
import AdminNav from "../../components/AdminNav";
import { MdOutlineDescription } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import { createNewToggle } from "../../services/toggle-service";
import { getCurrentUser } from "../../auth";

function CreateToggle() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const navigate = useNavigate();

  const [data, setData] = useState({
    description: "",
    enabled: false,
    key: "",
    name: "",
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
    createNewToggle(data, user.userid)
      .then((resp) => {
        toast.success(data.messege);
        setData({
          description: "",
          enabled: false,
          key: "",
          name: "",
        });
        navigate("/user/toggle-management");
      })
      .catch((error) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Base>
      <AdminNav />
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h6>
                  Create New Toggle <BsToggles size={25} />
                </h6>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="name">
                      <MdDriveFileRenameOutline size={25} /> Enter toggle name
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter toggle name"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                      invalid={
                        error.errors?.response?.data?.name ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.name}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="key">
                      <FaKey size={25} /> Enter toggle key
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter toggle key"
                      id="key"
                      onChange={(e) => handleChange(e, "key")}
                      value={data.key}
                      invalid={error.errors?.response?.data?.key ? true : false}
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.key}
                    </FormFeedback>
                  </FormGroup>

                  <FormGroup>
                    <Label for="description">
                      <MdOutlineDescription size={25} /> Enter toggle
                      description
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter toggle description"
                      id="description"
                      onChange={(e) => handleChange(e, "description")}
                      value={data.description}
                      invalid={
                        error.errors?.response?.data?.description ? true : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.description}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center mt-5">
                    <Button color="light" outline>
                      Create Toggle
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default CreateToggle;
