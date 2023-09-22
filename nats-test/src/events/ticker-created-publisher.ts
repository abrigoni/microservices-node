import { Publisher, Subjects, TicketCreatedEvent } from "@abtickets-c/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
