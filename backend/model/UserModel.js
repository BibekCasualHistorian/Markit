const { default: mongoose } = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.statics.register = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  if (!validator.isEmail(email)) {
    throw Error("Please Enter valid Email");
  }

  if (!validator.isLength(password, { min: 8 })) {
    throw Error("Password must be at least 8 characters long");
  }

  // if (!validator.isAlphanumeric(password)) {
  //   throw Error("Password must only contain letters and numbers");
  // }

  if (!validator.isStrongPassword(password, { minLength: 8 })) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill in all fields");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("No user with such Email");
  }

  console.log("is user available", user);

  // console.log("user", user);

  const match = await bcrypt.compare(password, user.password);
  // console.log("match", match);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", UserSchema);
