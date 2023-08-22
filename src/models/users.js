import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  surname: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
  },
});

const Users = mongoose.model("user", usersSchema);

export default Users;
