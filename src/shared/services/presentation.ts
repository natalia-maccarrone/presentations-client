import endpoints from "./index";
import axios from "axios";
import { Presentation, PresentationPayload } from "../../types";

export default class PresentationService {
  presentationEndpoint = endpoints.PRESENTATION;

  create = async (
    payload: PresentationPayload | undefined
  ): Promise<Presentation[]> => {
    const { data } = await axios.post(this.presentationEndpoint, payload);
    return data.response;
  };

  addToPresentation = async (
    presentationId: string,
    attendeeId: string
  ): Promise<void> => {
    const { data } = await axios.post(
      `${this.presentationEndpoint}/${presentationId}/attendees/${attendeeId}`
    );
    return data.response;
  };

  getAll = async (): Promise<Presentation[]> => {
    const { data } = await axios.get(this.presentationEndpoint);
    return data;
  };
}
