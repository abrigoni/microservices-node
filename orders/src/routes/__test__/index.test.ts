import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { Ticket } from "../../models/ticket";
import { Order } from "../../models/order";
import { OrderStatus } from "@abtickets-c/common";

const buildTicket = async () => {
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: "concert",
    price: 20,
  });
  await ticket.save();
  return ticket;
};

it("fetches orders for a particular user", async () => {
  // create three tickets
  const ticketOne = await buildTicket();
  const ticketTwo = await buildTicket();
  const ticketThree = await buildTicket();
  const tickets = await Ticket.find({});

  const user1 = global.signin();
  const user2 = global.signin();
  // create order as user #1
  await request(app)
    .post("/api/orders")
    .set("Cookie", user1)
    .send({ ticketId: ticketOne.id })
    .expect(201);

  // create two orders as User #2
  const { body: orderTwo } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticketTwo.id })
    .expect(201);
  const { body: orderThree } = await request(app)
    .post("/api/orders")
    .set("Cookie", user2)
    .send({ ticketId: ticketThree.id })
    .expect(201);

  // make requests to get orders for user #2
  const response = await request(app)
    .get("/api/orders")
    .set("Cookie", user2)
    .expect(200);
  // make sure we only got orders for user #2
  expect(response.body.length).toEqual(2);
  expect(response.body[0].id).toEqual(orderTwo.id);
  expect(response.body[1].id).toEqual(orderThree.id);
});
