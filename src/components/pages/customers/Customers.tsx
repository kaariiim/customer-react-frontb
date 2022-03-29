import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { ButtonGroup, Table } from "reactstrap";
import CustomerEdit from "./CustomerEdit";
import CustomerAdd from "./CustomerAdd";
import CustomerDelete from "./Customer.Delete";
import Customer from "../../../@Types/Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { getCustomers } from "../../../actions/customer/action";

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers(setCustomers); // aka setCustomers(data)
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between">
        <FormattedMessage tagName="h1" id="page.title.customers" />
        <CustomerAdd refresh={() => getCustomers(setCustomers)} />
      </div>
      <Table bordered hover responsive striped>
        <thead>
          <tr>
            <th>
              <FormattedMessage id="customer.fullname" />
            </th>
            <th>
              <FormattedMessage id="customer.age" />
            </th>
            <th>
              <FormattedMessage id="customer.birthdate" />
            </th>
            <th>
              <FormattedMessage id="customer.status" />
            </th>
            <th>
              <FormattedMessage id="customer.actions" />
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.length ? (
            customers.map((customer, i) => (
              <tr key={i}>
                <td scope="row">{customer.fullname}</td>
                <td>{customer.age}</td>
                <td>{customer.birthdate}</td>
                <td>{customer.status}</td>
                <td>
                  <ButtonGroup>
                    <CustomerEdit
                      customer={customer}
                      refresh={() => getCustomers(setCustomers)}
                    />
                    <CustomerDelete
                      customer={customer}
                      refresh={() => getCustomers(setCustomers)}
                    />
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-5">
                <FontAwesomeIcon icon={faBoxOpen} size="4x" />
                <br />
                <FormattedMessage id="page.users.no-data" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Customers;
