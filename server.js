import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import router from "./router/routes.js";

config();

const app = express();
app.use(helmet());
app.use(json({ extended: false }));
app.use(cors());
app.use("/api/user", router);

connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Successfully connected to mongo"))
	.catch((err) => console.log("Connection failed", err));

// driver code
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Application started at: http://localhost:${port}`);
});
