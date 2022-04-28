import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { ButtonGroup, Container, Table } from "reactstrap";
import UserEdit from "./UserEdit";
import UserAdd from "./UserAdd";
import UserDelete from "./UserDelete";
import User from "../../../@Types/User";
import { getUsers } from "../../../actions/Users/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers(setUsers); // aka setUsers(data)
  }, []);

  return (
    <>
      <Container>
        <div className="d-flex justify-content-between">
          <FormattedMessage tagName="h1" id="page.title.users" />
          <UserAdd refresh={() => getUsers(setUsers)} />
        </div>
        <Table bordered hover responsive striped>
          <thead>
            <tr>
              <th>
                <FormattedMessage id="user.firstName" />
                {" & "}
                <FormattedMessage id="user.lastName" />
              </th>
              <th>
                <FormattedMessage id="user.email" />
              </th>
              <th>
                <FormattedMessage id="user.phone" />
              </th>
              <th>
                <FormattedMessage id="user.actions" />
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td scope="row">
                    {user.firstName} {user.lastName}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <ButtonGroup>
                      <UserEdit
                        user={user}
                        refresh={() => getUsers(setUsers)}
                      />
                      <UserDelete
                        user={user}
                        refresh={() => getUsers(setUsers)}
                      />
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center p-5">
                  <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                  <br />
                  <FormattedMessage id="page.users.no-data" />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Users;
