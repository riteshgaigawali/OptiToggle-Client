import React from "react";
import Base from "../../components/Base";
import AdminNav from "../../components/AdminNav";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
} from "reactstrap";

function ToggleManagement() {
  return (
    <Base>
      <AdminNav />
      <Container className="mt-5"></Container>
    </Base>
  );
}

export default ToggleManagement;
