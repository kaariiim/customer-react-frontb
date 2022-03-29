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
import Customer from "../../../@Types/Customer";
import { editCustomers } from "../../../actions/customer/action";

interface CustomerEditPropsType {
  customer: Customer;
  refresh: () => void;
}

const CustomerEdit = ({ customer, refresh }: CustomerEditPropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // form states
  const [fullname, setFullname] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [birthdate, setBirthdate] = useState<string>("");
  const [status, setStatus] = useState<boolean>(true);

  const submit = () => {
    const editCustomer = {
      fullname,
      age,
      birthdate,
      status,
    };

    editCustomers(editCustomer, () => {
      refresh();
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
          <FormattedMessage id="Customers.edit.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <Form inline>
            <FormGroup floating>
              <Input
                value={fullname}
                id="fullname"
                name="fullname"
                type="text"
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
                type="text"
                onChange={(e) => setStatus(true)}
              />
              <Label for="status">
                <FormattedMessage id="customer.status" />
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

export default CustomerEdit;
