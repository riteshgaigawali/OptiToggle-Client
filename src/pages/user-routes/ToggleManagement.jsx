import { React, useEffect, useState } from "react";
import Base from "../../components/Base";
import AdminNav from "../../components/AdminNav";
import { Button, Container, Table, ButtonGroup } from "reactstrap";
import { format } from "date-fns";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { RiAddCircleFill } from "react-icons/ri";
import { getAllToggle, updateToggle } from "../../services/toggle-service";
import { toast } from "react-toastify";

function ToggleManagement() {
  const [toggles, setToggles] = useState([]);

  useEffect(() => {
    getAllToggle()
      .then((data) => {
        setToggles(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleStatus = (toggle) => {
    updateToggle(toggle)
      .then((resp) => {
        toast.success("Status updated successfully !");
        getAllToggle()
          .then((data) => {
            setToggles(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // TODO : Update and Delete toggle

  return (
    <Base>
      <AdminNav />
      <Container className="mt-3">
        <Button size="lg">
          Add New Toggle <RiAddCircleFill size={25} />
        </Button>
        <Table dark hover responsive size="">
          <thead>
            <tr>
              <th>Toggle Id</th>
              <th>Key</th>
              <th>Toggle Name</th>
              <th>Description</th>
              <th>Created On</th>
              <th colSpan={3} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {toggles.length > 0 ? (
              toggles.map((toggle, i) => (
                <tr key={toggle.flagId}>
                  <td>{toggle.flagId}</td>
                  <td>{toggle.key}</td>
                  <td>{toggle.name}</td>
                  <td>{toggle.description}</td>
                  <td>{format(toggle.createdOn, "MMMM do yyyy, h:mm:ss a")}</td>
                  <td>
                    <ButtonGroup>
                      <Button
                        color="success"
                        outline
                        active={toggle.enabled === true}
                        onClick={() => {
                          toggle.enabled = true;
                          handleToggleStatus(toggle);
                        }}
                      >
                        ON
                      </Button>
                      <Button
                        color="danger"
                        outline
                        active={toggle.enabled === false}
                        onClick={() => {
                          toggle.enabled = false;
                          handleToggleStatus(toggle);
                        }}
                      >
                        OFF
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="text-right">
                    <button className="button muted-button">
                      <BiEdit size={25} />
                    </button>
                  </td>
                  <td className="text-left">
                    <button className="button muted-button">
                      <AiFillDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Employees</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Base>
  );
}

export default ToggleManagement;
