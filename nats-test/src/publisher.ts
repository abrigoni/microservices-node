import nats from "node-nats-streaming";
import { TicketCreatedPublisher } from "./events/ticker-created-publisher";

const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4222",
});

console.clear();

stan.on("connect", async () => {
  console.log("Publisher connected to NATS");

  // const data = JSON.stringify({
  //   id: "123",
  //   title: "concert",
  //   price: 20,
  // });
  // stan.publish("ticket:created", data, () => {
  //   console.log("event published");
  // });
  const publisher = new TicketCreatedPublisher(stan);
  try {
    publisher.publish({
      id: "123",
      title: "concert",
      price: 20,
    });
  } catch (err) {
    console.error(err);
  }
});
