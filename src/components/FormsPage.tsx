import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import PresentationForm from "./PresentationForm";
import AttendeeForm from "./AttendeeForm";
import AddAttendeeForm from "./AddAttendeeForm";
import Presentations from "./Presentations";

import { usePresentationService, useAttendeeService } from "../shared/hooks";

import {
  Presentation,
  PresentationPayload,
  Attendee,
  AttendeePayload,
} from "../types";

function FormsPage() {
  const [presentations, setPresentations] = useState<Presentation[]>([]);
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    getAllPresentations();
    getAllAttendees();
  }, []);

  const getAllPresentations = async () => {
    const presentations = await presentationService.getAll();
    setPresentations(presentations);
  };

  const getAllAttendees = async () => {
    const attendees = await attendeeService.getAll();
    setAttendees(attendees);
  };

  const presentationService = usePresentationService();
  const attendeeService = useAttendeeService();

  const handleOnSubmitPresentation = async (data: PresentationPayload) => {
    await presentationService.create(data);
    getAllPresentations();
  };

  const handleOnSubmitAttendee = async (data: AttendeePayload) => {
    await attendeeService.create(data);
    getAllAttendees();
  };

  const handleAddAttendee = async (
    presentationId: string,
    attendeeId: string
  ) => {
    await presentationService.addToPresentation(presentationId, attendeeId);
    getAllPresentations();
  };

  return (
    <Container>
      <Row>
        <h1 className="m-3">Su Casa | Presentations</h1>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Card className="m-3" bg="light">
            <Card.Header>Add a new Presentation</Card.Header>
            <PresentationForm onSubmit={handleOnSubmitPresentation} />
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="m-3" bg="light">
            <Card.Header>Add a new Attendee</Card.Header>
            <AttendeeForm onSubmit={handleOnSubmitAttendee} />
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="m-3" bg="light">
            <Card.Header>Add Attendee to Presentation</Card.Header>
            <AddAttendeeForm
              onSubmit={handleAddAttendee}
              presentations={presentations}
              attendees={attendees}
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Presentations presentations={presentations} />
      </Row>
    </Container>
  );
}

export default FormsPage;
