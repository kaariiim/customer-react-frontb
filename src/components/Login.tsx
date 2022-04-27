import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Forget from "./ForgetPassword";
export default function Login() {
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="screen bg-dark " />
        <Col
          xs={12}
          md={6}
          className="login text-center p-5 d-flex flex-column justify-content-center"
        >
          <h1>Please sign in to start watching</h1>
          <Form inline>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <Button>Sign in</Button>
            <br></br>
            <span onClick={Forget}>Forget Password</span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
