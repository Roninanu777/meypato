import { genSalt, hash, compare } from "bcrypt";
import { User } from "../model/usr.js";
import { Otp } from "../model/otp.js";
import generateOTP from "../util/generateOTP.js";

export const verifyOtp = async (req, res) => {
	try {
		const input = req.body.number;
		const pwd = req.body.otp;

		if (pwd.length === 0) return res.status(400).json({ info: "Otp cannot be blank" });

		// verifying user
		const otp = await Otp.find({ number: input });
		if (!otp) return res.status(404).json({ info: "otp not found" });

		// comparing otp
		const details = otp[otp.length - 1];
		const valid = await compare(pwd, details.otp);

		if (input === details.number && valid) {
			// generating token
			const user = new User({ number: input });
			const token = user.generateTkn();
			// todo - save jwt tkn in db for comparison later
			// access_token for further usage
			return res.status(201).json({ access_token: token, info: "Token generated" });
		} else {
			return res.status(400).json({ info: "Bad request" });
		}
	} catch (err) {
		return res.status(400).json({ info: err });
	}
};
