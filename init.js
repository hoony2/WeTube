import dotenv from "dotenv";
import "./db"
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/user";

const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`Listening on : Http://localhost:${PORT}`);

app.listen(PORT, handleListening);

