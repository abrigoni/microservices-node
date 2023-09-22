import { Publisher, Subjects, OrderCancelleddEvent } from "@abtickets-c/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelleddEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
