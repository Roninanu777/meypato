import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const client = new SNSClient({
	region: process.env.SMS_REGION,
	credentials: {
		accessKeyId: process.env.SMS_ACCESS_KEY,
		secretAccessKey: process.env.SMS_SECRET_KEY,
	},
});

export default async function sendOTP(otp, phoneNumber) {
	let params = {
		Message: `Welcome to Meypato! your mobile verification codee is: ${otp}`,
		PhoneNumber: phoneNumber,
	};

	try {
		const command = new PublishCommand(params);
		const data = await client.send(command);
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
