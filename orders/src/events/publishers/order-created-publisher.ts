import { Publisher, OrderCreatedEvent, Subjects } from "@abtickets-c/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
