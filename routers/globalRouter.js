import express from "express";
import routes from "../routes";
import { search, home } from "../controller/videoController";
import { 
    getJoin,
    getLogin,
    logout,
    postJoin,
    postLogin
    } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;