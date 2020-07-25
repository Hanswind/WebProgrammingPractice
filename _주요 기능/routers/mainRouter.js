import express from "express";
import routes from "../routes";
import { home } from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);

export default mainRouter;
