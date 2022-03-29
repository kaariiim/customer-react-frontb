import { ChangeEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import { login } from "../actions/Auth/action";

function Login(props: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submit = (e: any) => {
    e.preventDefault();
    login(
      email,
      password,
      (data: any) => {
        localStorage.setItem("access_token", data.access_token);
        props.goToDashboard();
      },
      () => {}
    );
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const changePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Container fluid>
      <Row>
        <FormattedMessage tagName="h1" id="login.title" />
        <FormattedMessage tagName="p" id="login.subtitle" />
        <Form onSubmit={submit}>
          <FormGroup floating className="mb-3">
            <Input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={changeEmail}
            />
            <FormattedMessage tagName="label" id="login.email" />
          </FormGroup>
          <FormGroup floating>
            <Input
              type="password"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={changePassword}
            />
            <FormattedMessage tagName="label" id="login.pass" />
          </FormGroup>
          <Row>
            <Col className="d-flex">
              <FormGroup check inline className="text-left">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <FormattedMessage tagName="label" id="login.text" />
              </FormGroup>
            </Col>
          </Row>
          <Button type="submit" color="dark" size="lg">
            <FormattedMessage id="login.btn" />
          </Button>
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
