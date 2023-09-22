import { PaymentCreatedEvent, Publisher, Subjects } from "@abtickets-c/common";
import { queueGroupName } from "../queue-group-name";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
  queueGroupName = queueGroupName;
}
