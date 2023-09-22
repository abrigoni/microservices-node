import { Publisher, Subjects, TicketUpdatedEvent } from "@abtickets-c/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
