const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    mobile: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "seller"],
      default: "user",
    },
    cart: {
      type: Array,
      default: [],
    },
    
    refreshToken: {
      type: String,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    timestamps: true, // time create
  }
);

userSchema.pre(
  "save",
  async function (next) {
    //Gọi hàm next để tiếp tục quá trình lưu tài liệu vào cơ sở dữ liệu.
    if (!this.isModified("password")) {
      next();
    }
    const salt =
      await bcrypt.genSaltSync(10); //chuỗi ngẫu nhiên được thêm vào mật khẩu có tính bảo mật cao hơn
    this.password = await bcrypt.hash(
      this.password,
      salt
    ); // hash dùng để mã hóa mật khẩu của người dùng
  }
);
userSchema.methods.isPasswordMatched =
  async function (enteredPassword) {
    return await bcrypt.compare(
      enteredPassword,
      this.password
    );
  };

userSchema.methods.createPasswordResetToken =
  async function () {
    const resettoken = crypto
      .randomBytes(32)
      .toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resettoken)
      .digest("hex");
    this.passwordResetExpires =
      Date.now() + 30 * 60 * 1000; // 10 minutes
    return resettoken;
  };
//Export the model
module.exports = mongoose.model(
  "User",
  userSchema
);
