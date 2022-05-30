import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { AttendeePayload } from "../types";

const AttendeeForm = ({
  onSubmit,
}: {
  onSubmit: (attendee: AttendeePayload) => void;
}) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event: React.ChangeEvent<any>) => {
    setName(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<any>) => {
    setCompany(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<any>) => {
    setEmail(event.target.value);
  };

  const clearInputs = () => {
    setName("");
    setCompany("");
    setEmail("");
  };

  const handleSubmit = async () => {
    onSubmit({
      name,
      company,
      email,
    });
    clearInputs();
  };

  return (
    <Form style={{ padding: "15px" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter company"
          value={company}
          onChange={(e) => handleCompanyChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AttendeeForm;
