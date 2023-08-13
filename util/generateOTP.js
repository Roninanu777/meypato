//write a function to generate OTP that takes length as an argument
//and returns a random number of that length. The otp should be alpha numeric.

const generateOTP = (length) => {
	const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let otp = "";
	for (let i = 0; i < length; i++) {
		otp += chars[Math.floor(Math.random() * chars.length)];
	}
	return otp;
};

export default generateOTP;
