import _ from 'lodash';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(_.pick(this, ['_id', 'username']), process.env.PRIVATE_KEY);
}

export default mongoose.model('User', userSchema);