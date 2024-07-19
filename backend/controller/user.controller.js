import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

//signup
export const Signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ meassage: "User Already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await createdUser.save();
    res.status(200).json({ message: "User Created Succesfully" });
  } catch (error) {
    console.log("Error " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ meassage: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login Successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
