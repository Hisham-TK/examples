import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

const ticketTypes = ["openAccount", "closeAccount", "withdraw", "deposit"];
const ticketSchema = new mongoose.Schema(
  {
    ticketType: {
      type: String,
      enum: ticketTypes,
    },
  },
  { timestamps: true }
);
const ticketModel = mongoose.model("ticket", ticketSchema);

app.post("/ticket", async (_req: Request, res: Response) => {
  // setInterval(()=>{
  //   ticketModel.create({
  //     ticketType: ticketTypes[Math.floor(Math.random() * ticketTypes.length)],
  //   });
  // },10)

  const createdTicket = await ticketModel.create({
    ticketType: ticketTypes[Math.floor(Math.random() * ticketTypes.length)],
  });
  res.status(200).send(createdTicket);
});

async function init() {
  // Promise.all([
  const port = 3000;
  await app.listen(port, () => {
    console.log(`Server starts on ${port}`);
  });

  await mongoose.connect(
    "mongodb://localhost:27017/mongo-kafka-connector",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => {
      console.log(err || "Connected to Database successfully");
    }
  );

  setInterval(() => {
    ticketModel.create({
      ticketType: ticketTypes[Math.floor(Math.random() * ticketTypes.length)],
    });
  }, 1);
  // ]);
}
init();
