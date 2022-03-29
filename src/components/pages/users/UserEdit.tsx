import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import User from "../../../@Types/User";
import { editUsers } from "../../../actions/Users/action";

interface UserEditPropsType {
  user: User;
  refresh: () => void;
}

const UserEdit = ({ user, refresh }: UserEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [firstName, setFirstName] = useState<string>(user.firstName);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [phone, setPhone] = useState<string>(user.phone);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>(user.password);

  const submit = () => {
    const newUser = {
      _id: user._id,
      firstName,
      lastName,
      phone,
      email,
      password,
    };
    editUsers(newUser, () => {
      refresh();
      setIsOpened(false);
      reset(newUser);
    });
  };

  const reset = (user: User) => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
  };

  return (
    <>
      <Button color="warning" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader className="bg-warning" toggle={() => setIsOpened(false)}>
          <FormattedMessage id="users.edit.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={firstName}
                id="firstname"
                name="firstname"
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Label for="firstname">
                <FormattedMessage id="user.firstName" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={lastName}
                id="lastName"
                name="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Label for="lastName">
                <FormattedMessage id="user.lastName" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={email}
                id="email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label for="email">
                <FormattedMessage id="user.email" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={password}
                id="password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="password">
                <FormattedMessage id="user.password" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={phone}
                id="phone"
                name="phone"
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Label for="phone">
                <FormattedMessage id="user.phone" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" onClick={submit}>
            <FormattedMessage id="button.confirm" />
          </Button>{" "}
          <Button onClick={() => setIsOpened(false)}>
            <FormattedMessage id="button.cancel" />
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UserEdit;
