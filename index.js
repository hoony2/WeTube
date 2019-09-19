import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

const handlelistening = () => console.log(`listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send("Hello from home");

const handleProfile = (req,res) => res.send("you are on my Profile");

const betweenHome = (req,res,next) => {
    console.log("Between");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("tiny"));

app.get("/", handleHome);

app.get("/Profile", handleProfile);

app.listen(PORT, handlelistening);