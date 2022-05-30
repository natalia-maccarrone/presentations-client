import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Presentation, PresentationPayload } from "../types";

const PresentationForm = ({
  onSubmit,
}: {
  onSubmit: (presentation: PresentationPayload) => void;
}) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [room, setRoom] = useState("");
  const [speakerName, setSpeakerName] = useState("");
  const [speakerCompany, setSpeakerCompany] = useState("");
  const [speakerEmail, setSpeakerEmail] = useState("");
  const [speakerBio, setSpeakerBio] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<any>) => {
    setTitle(event.target.value);
  };

  const handleDetailsChange = (event: React.ChangeEvent<any>) => {
    setDetails(event.target.value);
  };

  const handleRoomChange = (event: React.ChangeEvent<any>) => {
    setRoom(event.target.value);
  };

  const handleSpeakerNameChange = (event: React.ChangeEvent<any>) => {
    setSpeakerName(event.target.value);
  };

  const handleSpeakerCompanyChange = (event: React.ChangeEvent<any>) => {
    setSpeakerCompany(event.target.value);
  };

  const handleSpeakerEmailhange = (event: React.ChangeEvent<any>) => {
    setSpeakerEmail(event.target.value);
  };

  const handleSpeakerBiohange = (event: React.ChangeEvent<any>) => {
    setSpeakerBio(event.target.value);
  };

  const clearInputs = () => {
    setTitle("");
    setDetails("");
    setRoom("");
    setSpeakerName("");
    setSpeakerCompany("");
    setSpeakerEmail("");
    setSpeakerBio("");
  };

  const handleSubmit = async () => {
    onSubmit({
      title,
      details,
      room: parseInt(room),
      speaker: {
        name: speakerName,
        email: speakerEmail,
        company: speakerCompany,
        bio: speakerBio,
      },
    });
    clearInputs();
  };

  return (
    <Form style={{ padding: "15px" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => handleTitleChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter details"
          value={details}
          onChange={(e) => handleDetailsChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="number"
          placeholder="Enter room number"
          value={room}
          onChange={(e) => handleRoomChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="string"
          placeholder="Enter speaker name"
          value={speakerName}
          onChange={(e) => handleSpeakerNameChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="string"
          placeholder="Enter speaker company"
          value={speakerCompany}
          onChange={(e) => handleSpeakerCompanyChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="string"
          placeholder="Enter speaker email"
          value={speakerEmail}
          onChange={(e) => handleSpeakerEmailhange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="string"
          placeholder="Enter speaker bio"
          value={speakerBio}
          onChange={(e) => handleSpeakerBiohange(e)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default PresentationForm;
