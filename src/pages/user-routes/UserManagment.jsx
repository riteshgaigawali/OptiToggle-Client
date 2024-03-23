import { React, useEffect, useState } from "react";
import Base from "../../components/Base";
import AdminNav from "../../components/AdminNav";
import {
  deleteUser,
  getAllUsers,
  updateUser,
} from "../../services/user-service";
import { Button, Container, Table } from "reactstrap";
import { format } from "date-fns";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { TiUserAdd } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserManagment() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const redirectToCreateUser = () => {
    navigate("/user/add-user");
  };

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (userid) => {
    deleteUser(userid)
      .then((data) => {
        toast.success(data.messege);
        getAllUsers()
          .then((data) => {
            setUsers(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        toast.error("You are not authorized for this action !");
      });
  };

  const handleUpdate = (user) => {
    navigate("/user/update-user", { state: user });
  };

  return (
    <Base>
      <AdminNav />
      <Container className="mt-3">
        <Button size="lg" onClick={redirectToCreateUser}>
          Add New User <TiUserAdd size={25} />
        </Button>
        <Table dark hover responsive size="">
          <thead>
            <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Created On</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, i) => (
                <tr key={user.userid}>
                  <td>{user.userid}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.emailid}</td>
                  <td>{format(user.createdOn, "MMMM do yyyy, h:mm:ss a")}</td>
                  <td className="text-right">
                    <button
                      className="button muted-button"
                      onClick={() => handleUpdate(user)}
                    >
                      <FaUserEdit size={25} />
                    </button>
                  </td>
                  <td className="text-left">
                    <button
                      className="button muted-button"
                      onClick={() => handleDelete(user.userid)}
                    >
                      <TiUserDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No Users Found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Base>
  );
}

export default UserManagment;
