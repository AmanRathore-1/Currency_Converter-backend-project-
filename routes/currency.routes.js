import {Router} from "express"
import { convertCurrency } from "../controllers/currency.controller.js";
import {validateInput} from "../middlewares/logger.middleware.js"
const router=Router();

router.get("/convert",validateInput,convertCurrency);

export default  router