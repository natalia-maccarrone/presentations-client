import dayjs from "dayjs";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";

import { Presentation } from "../types";

const Presentations = ({
  presentations,
}: {
  presentations: Presentation[];
}) => {
  return (
    <Row>
      {presentations.map((presentation) => {
        const speaker = JSON.parse(presentation.speaker);
        const { name, company, email, bio } = speaker;
        return (
          <ul key={presentation.id}>
            <Card className="m-3" bg="light" border="dark">
              <Card.Header>Presentations</Card.Header>
              <div className="p-3">
                <p>Title: {presentation.title}</p>
                <p>Details: {presentation.details}</p>
                <p>Room: {presentation.room}</p>
                <p>
                  Speaker: Name: {name} | Email: {email} | Company: {company} |
                  Bio: {bio}
                </p>
                {presentation.attendees.length > 0 && (
                  <>
                    <p>Attendees</p>
                    <ListGroup as="ol" numbered>
                      {presentation.attendees.map((attendee) => {
                        return (
                          <ListGroup.Item as="li" key={attendee.id}>{`${
                            attendee.name
                          } - Registered at ${dayjs(
                            attendee.registeredAt
                          ).format("MMMM D, YYYY h:mm A")}`}</ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </>
                )}
              </div>
            </Card>
          </ul>
        );
      })}
    </Row>
  );
};

export default Presentations;
