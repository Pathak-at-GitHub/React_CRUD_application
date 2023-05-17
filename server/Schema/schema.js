import mongoose from "mongoose";

import autoIncrementPlugin from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

// userSchema.pre("save", function (next) {
//   const doc = this;
//   Counter.findByIdAndUpdate(
//     { _id: "userId" },
//     { $inc: { sequence_value: 1 } },
//     { new: true, upsert: true }
//   )
//     .then((counter) => {
//       doc._id = counter.sequence_value;
//       next();
//     })
//     .catch((error) => {
//       next(error);
//     });
// });

// autoIncrementPlugin.initialize(mongoose.connection);

// userSchema.plugin(autoIncrementPlugin.plugin, "user");

const user = mongoose.model("users", userSchema);
export default user;
