import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Presentation, Attendee } from "../types";

const AddAttendeeForm = ({
  onSubmit,
  presentations,
  attendees,
}: {
  onSubmit: (presentationId: string, attendeeId: string) => void;
  presentations: Presentation[];
  attendees: Attendee[];
}) => {
  const [presentationId, setPresentationId] = useState("");
  const [attendeeId, setAttendeeId] = useState("");

  const handlePresentationIdChange = (event: React.ChangeEvent<any>) => {
    setPresentationId(event.target.value);
  };

  const handleAttendeeIdChange = (event: React.ChangeEvent<any>) => {
    setAttendeeId(event.target.value);
  };

  const clearInputs = () => {
    setPresentationId("");
    setAttendeeId("");
  };

  const handleSubmit = async () => {
    onSubmit(presentationId, attendeeId);
    clearInputs();
  };

  const renderPresentations = () => {
    return presentations.map((presentation) => {
      return (
        <option key={presentation.id} value={presentation.id}>
          {presentation.title}
        </option>
      );
    });
  };

  const renderAttendees = () => {
    return attendees.map((attendee) => {
      return (
        <option key={attendee.id} value={attendee.id}>
          {attendee.name}
        </option>
      );
    });
  };

  return (
    <Form style={{ padding: "15px" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select
          value={presentationId}
          onChange={handlePresentationIdChange}
        >
          <option>Choose Presentation</option>
          {presentations && renderPresentations()}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Select value={attendeeId} onChange={handleAttendeeIdChange}>
          <option>Choose attendee</option>
          {renderAttendees()}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AddAttendeeForm;
