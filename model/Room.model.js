//create a model for rental room
import { Schema } from "mongoose";

const RoomSchema = new Schema(
	{
		roomName: {
			type: String,
			required: true,
		},
		roomType: {
			type: String,
			required: true,
		},
		roomPrice: {
			type: Number,
			required: true,
		},
		roomDescription: {
			type: String,
			required: true,
		},
		roomImage: {
			type: String,
			required: true,
		},
		roomStatus: {
			type: String,
			required: true,
		},
		roomCapacity: {
			type: Number,
			required: true,
		},
		roomFacilities: {
			type: String,
			required: true,
		},
		roomLocation: {
			type: String,
			required: true,
		},
		roomOwner: {
			type: Schema.Types.ObjectId, // Reference to the OwnerDetailSchema
			ref: "Owner", // Reference to the 'OwnerDetail' model
			required: true,
		},
		roomSecret: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Room = mongoose.model("Room", RoomSchema);

export default Room;
