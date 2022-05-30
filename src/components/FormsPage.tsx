import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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

  const presentationService = usePresentationService();
  const attendeeService = useAttendeeService();

  useEffect(() => {
    getAllPresentations();
    getAllAttendees();
  }, []);

  const getAllPresentations = async () => {
    try {
      const presentations = await presentationService.getAll();
      setPresentations(presentations);
    } catch (error: any) {
      toast(error.response.data.Error);
    }
  };

  const getAllAttendees = async () => {
    try {
      const attendees = await attendeeService.getAll();
      setAttendees(attendees);
    } catch (error: any) {
      toast(error.response.data.Error);
    }
  };

  const handleOnSubmitPresentation = async (data: PresentationPayload) => {
    try {
      await presentationService.create(data);
      getAllPresentations();
    } catch (error: any) {
      toast(error.response.data.Error);
    }
  };

  const handleOnSubmitAttendee = async (data: AttendeePayload) => {
    try {
      await attendeeService.create(data);
      getAllAttendees();
    } catch (error: any) {
      toast(error.response.data.Error);
    }
  };

  const handleAddAttendee = async (
    presentationId: string,
    attendeeId: string
  ) => {
    try {
      if (!presentationId || !attendeeId) {
        throw new Error("Missing presentation or attendee");
      }
      await presentationService.addToPresentation(presentationId, attendeeId);
      getAllPresentations();
    } catch (error: any) {
      console.log(error);
      toast(error.message);
    }
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
      <Toaster />
    </Container>
  );
}

export default FormsPage;
