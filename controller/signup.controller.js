import { genSalt, hash } from "bcrypt";

import { User } from "../model/usr.js";
import { Otp } from "../model/otp.js";
import generateOTP from "../util/generateOTP.js";
import sendOTP from "../util/sendOTP.js";

export const signUp = async (req, res) => {
	try {
		const input = req.body.number;

		if (input.length === 0) return res.status(400).json({ info: "Number cannot be blank" });
		if (input.length !== 10)
			return res.status(400).json({ info: "Number should be of 10 digits" });

		// validating user
		let user = await User.findOne({ number: input });
		if (user) return res.status(409).json({ info: "User already registered" });

		// save user
		const usr = new User({ number: input });
		await usr.save();

		// generating otp
		let random = generateOTP(6);
		console.log(random);

		// saving otp in db
		const otp = new Otp({ number: input, otp: random });
		const salt = await genSalt(10);
		otp.otp = await hash(otp.otp, salt);
		const result = await otp.save();
		console.log("saved", result);

		await sendOTP(random, `+91${input}`);

		return res.status(201).json({ data: random, info: "Otp generated" });
	} catch (err) {
		return res.status(400).json({ info: err });
	}
};
