const { connect, Schema, model } = require("mongoose");
const util = require("util");

Promise.all([
  connect(
    "mongodb://localhost:27017,localhost:27018,localhost:27019/courier_dev-db",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err) => !err && console.log("Connected to db")
  ),
]);

const placeSchema = new Schema({
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], index: "2dsphere" },
  },
});

const placeModel = model("cou-place", placeSchema);
placeModel
  .find(
    {
      location: {
        $geoWithin: { $center: [[29.76380825042725, 31.093771347098386], 1] },
      },
    },
    {
      _id: 1,
      addressDescription: 1,
      location: 1,
    }
  )
  //   .where({})
  //   .within({})
  .exec((err, data) => {
    if (err) console.error(err);
    else console.log(util.inspect(data, { depth: null }));
  });
