import { faAdd } from "@fortawesome/free-solid-svg-icons";
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
import { addCustomer } from "../../../actions/customer/action";

interface CustomerAddPropsType {
  refresh: () => void;
}

const CustomerAdd = (props: CustomerAddPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [fullname, setFullname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [birthdate, setBirthdate] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);

  const submit = () => {
    const newCustomer = {
      fullname,
      age,
      birthdate,
      status,
    };

    addCustomer(newCustomer, () => {
      props.refresh();
      setIsOpened(false);
      reset();
    });
  };

  const reset = () => {
    setFullname("");
    setAge(0);
    setBirthdate("");
    setStatus(true);
  };

  return (
    <>
      <Button
        color="success"
        size="lg"
        className="mb-2"
        onClick={() => setIsOpened(true)}
      >
        <FormattedMessage id="page.customers.add" />{" "}
        <FontAwesomeIcon icon={faAdd} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-success text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="Customers.add.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={fullname}
                id="fullname"
                name="fullname"
                type="text"
                onChange={(e) => setFullname(e.target.value)}
              />
              <Label for="fullname">
                <FormattedMessage id="customer.fullname" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={age}
                id="age"
                name="age"
                type="number"
                onChange={(e) => setAge(Number.parseInt(e.target.value))}
              />
              <Label for="age">
                <FormattedMessage id="customer.age" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={birthdate}
                id="birthdate"
                name="birthdate"
                type="text"
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <Label for="birthdate">
                <FormattedMessage id="customer.birthdate" />
              </Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                value={status}
                id="status"
                name="status"
                type="select"
                onChange={(e) => setStatus(true)}
              />
              <Label for="status">
                <FormattedMessage id="customer.status" />
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={submit}>
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

export default CustomerAdd;
