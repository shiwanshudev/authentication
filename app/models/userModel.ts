import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,

    // Here Select False is added to prevent the password from getting retrieved
    // if User.findOne etc. to fetch the user is called. In order to use it we need
    // to add .select("password") for it to be fetched when called.
    // Ex: await User.findOne({email}).select('+password')
  },
  googleId: {
    type: String,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
