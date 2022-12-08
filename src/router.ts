import { Router } from "express";
import { controller } from "./app/controller/Controller"

const router: Router = Router();

router.get("/", controller.home);
router.get("/error", controller.error)

export { router };