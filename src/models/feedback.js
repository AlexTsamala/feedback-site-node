import mongoose from "mongoose";

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  category: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
  },
});

const Feedback = mongoose.model("feedback", feedbackSchema);

export default Feedback;
