import express from "express";
import requestLogger from "pino-http";
import pino from "pino";
import type { Response } from "express-serve-static-core";
const app = express();
const port = 3000;

const logger = pino({
	level: "info",
});

app.use(requestLogger());

app.use("/", (req, res, next) => {
	logger.info("Request received");
	next();
});

app.get("/", (req, res) => {
	handleWebRequest(res);
});

app.listen(port, () => {
	logger.info(`Server is running on port ${port}`);
});

function handleWebRequest(res: Response<unknown, Record<string, unknown>, number>) {
    res.send("Hello World!");
}

