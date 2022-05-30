export type Presentation = {
  id: string;
  title: string;
  details: string;
  room: number;
  speaker: string;
  attendees: Attendee[];
};

export type PresentationPayload = {
  title: string;
  details: string;
  room: number;
  speaker: {
    name: string;
    company: string;
    email: string;
    bio: string;
  };
};

export type AttendeePayload = {
  name: string;
  company: string;
  email: string;
};

export type Attendee = {
  id: string;
  name: string;
  company: string;
  email: string;
  registeredAt: Date;
};
