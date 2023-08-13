import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = Schema(
	{
		number: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

UserSchema.methods.generateTkn = function () {
	return jwt.sign(
		{
			_id: this._id,
			number: this.number,
			issuer: "jcg",
		},
		process.env.SECRET_TOKEN,
		{ expiresIn: "1d" }
	);
};

export const User = model("User", UserSchema);
