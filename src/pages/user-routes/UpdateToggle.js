import { React, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
} from "reactstrap";
import Base from "../../components/Base";
import { toast } from "react-toastify";
import AdminNav from "../../components/AdminNav";
import { MdOutlineDescription } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoOptionsSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { BsToggles } from "react-icons/bs";
import { updateToggle } from "../../services/toggle-service";

function UpdateToggle() {
  const navigate = useNavigate();
  const location = useLocation();
  const toggle = location.state;

  const [data, setData] = useState({
    flagId: toggle.flagId,
    description: toggle.description,
    enabled: toggle.enabled,
    key: toggle.key,
    name: toggle.name,
    optionalField: toggle.optionalField,
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

    updateToggle(data)
      .then((resp) => {
        toast.success("Toggle updated successfully !");
        setData({
          flagId: "",
          description: "",
          enabled: toggle.enabled,
          key: "",
          name: "",
          optionalField: "",
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
                  Update Toggle <BsToggles size={25} />
                </h6>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitForm}>
                  <FormGroup>
                    <Label for="name">
                      <MdDriveFileRenameOutline size={25} /> Enter toggle name*
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ex: Discount Toggle, Database Toggle, ..."
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
                      <FaKey size={25} /> Enter toggle key*
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ex: DISCOUNT50, LEGACYDB, ..."
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
                      description (Optional)
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
                  <FormGroup>
                    <Label for="optionalField">
                      <IoOptionsSharp size={25} /> Optional Field (Optional)
                    </Label>
                    <Input
                      type="text"
                      placeholder="Ex: 50%, 'http://localhost:8080/', ..."
                      id="optionalField"
                      onChange={(e) => handleChange(e, "optionalField")}
                      value={data.optionalField}
                      invalid={
                        error.errors?.response?.data?.optionalField
                          ? true
                          : false
                      }
                    />
                    <FormFeedback>
                      {error.errors?.response?.data?.optionalField}
                    </FormFeedback>
                  </FormGroup>
                  <Container className="text-center mt-5">
                    <Button color="light" outline>
                      Update Toggle
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

export default UpdateToggle;
