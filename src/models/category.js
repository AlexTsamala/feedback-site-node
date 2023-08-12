import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.Number,
  },
});

const Category = mongoose.model("category", categorySchema);

export default Category;
