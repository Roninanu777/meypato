import { Schema, model } from "mongoose";

const otpSch = Schema(
	{
		number: {
			type: String,
			required: true,
		},
		otp: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			index: { expires: 300 },
		},
	},
	{ timestamps: true } // Auto remove after 5 minutes
);

export const Otp = model("Otp", otpSch);
