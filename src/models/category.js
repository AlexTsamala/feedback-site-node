import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
  },
});

const Category = mongoose.model("category", categorySchema);

export default Category;
