import PresentationService from "../services/presentation";
import AttendeeService from "../services/attendees";

const usePresentationService = () => {
  return new PresentationService();
};

const useAttendeeService = () => {
  return new AttendeeService();
};

export { usePresentationService, useAttendeeService };
