import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@abtickets-c/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
