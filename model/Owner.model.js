import { Schema } from "mongoose";
const OwnerSchema = new Schema(
	{
		ownerName: {
			type: String,
			required: true,
		},
		ownerPhone: {
			type: String,
			required: true,
		},
		ownerAddress: {
			type: String,
			required: true,
		},
		ownerGender: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Owner = mongoose.model("OwnerDetail", OwnerSchema);

export default Owner;
