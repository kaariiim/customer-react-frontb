import { useState } from "react";
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
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  
  if (localStorage.getItem('email') != "") {
    document.location.href ="/dashboard"
  }

  const makeLogin = () => { 
    localStorage.setItem("email", email); 
    document.location.href ="/dashboard" 
  }
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={6} className="screen bg-dark " />
        <Col
          xs={12}
          md={6}
          className="login text-center p-5 d-flex flex-column justify-content-center"
        >
          <h1>Please sign in to start</h1>
          <Form inline>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>{" "}
            <Button onClick={()=>makeLogin()}>Sign in</Button>
            <br></br>
            <span onClick={Forget}>Forget Password</span>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
