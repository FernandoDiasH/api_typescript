import { Router } from "express";
import { controller } from "./controller/Controller"
import UserController from "./controller/UserController"
const router: Router = Router();

router.get("/", controller.home);
router.get("/error", controller.error)

router.post("/user/create", UserController.CreateUser)

export { router };