import { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Customer from "../../../@Types/Customer";
import { deleteCustomers } from "../../../actions/customer/action";

interface CustomerDeletePropsType {
  customer: Customer;
  refresh: () => void;
}

const CustomerDelete = ({ customer, refresh }: CustomerDeletePropsType) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const submit = () => {
    deleteCustomers(customer, () => {
      refresh();
      setIsOpened(false);
    });
  };

  return (
    <>
      <Button color="danger" onClick={() => setIsOpened(true)}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <Modal
        centered
        scrollable
        isOpen={isOpened}
        toggle={() => setIsOpened(!isOpened)}
      >
        <ModalHeader
          className="bg-danger text-white"
          toggle={() => setIsOpened(!isOpened)}
        >
          <FormattedMessage id="customers.delete.dialog.title" />
        </ModalHeader>
        <ModalBody>
          <FormattedMessage id="customers.delete.dialog.text" />{" "}
          {customer.fullname}?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={submit}>
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

export default CustomerDelete;
