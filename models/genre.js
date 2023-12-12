/* eslint-disable-next-line import/no-extraneous-dependencies */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const GenreSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});

// Virtual for book's URL
GenreSchema.virtual("url").get(function getId() {
  // We don't use an arrow function as we'll need the this object
  // eslint-disable-next-line no-underscore-dangle
  return `/catalog/book/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
