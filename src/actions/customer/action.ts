import axios from "axios";
import Customer from "../../@Types/Customer";

export function getCustomers(callback: (data: Customer[]) => void) {
  axios
    .get("http://localhost:3000/customer")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addCustomer(customer: Customer, callback: () => void) {
  axios
    .post("http://localhost:3000/customer", customer)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editCustomers(customer: Customer, callback: () => void) {
  axios
    .put(`http://localhost:3000/customer/${customer._id}`, customer)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteCustomers(customer: Customer, callback: () => void) {
  axios
    .delete(`http://localhost:3000/customer/${customer._id}`)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
