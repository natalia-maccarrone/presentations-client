import endpoints from "./index";
import axios from "axios";
import { Attendee, AttendeePayload } from "../../types";

export default class AttendeeService {
  attendeesEndpoint = endpoints.ATTENDEE;

  create = async (payload: AttendeePayload | undefined) => {
    const { data } = await axios.post(this.attendeesEndpoint, payload);
    return data.response;
  };

  getAll = async (): Promise<Attendee[]> => {
    const { data } = await axios.get(this.attendeesEndpoint);
    return data;
  };
}
