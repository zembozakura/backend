import express from "express";
import { controllers } from "./controllers/controllers.js";
import { errorHandlerMiddleware } from "./middlewares/error_handler_middlewares.js";


const app = express();
const router = express.router;
router.use(express.json);
router.use(LogMiddleware);
controllers(router);



app.use(express.json());

controllers(app);

app.use(errorHandlerMiddleware);

const PORT = 3000;


app.listen(
     PORT, 
     () => {
     console.log(`servidor corriendo con http://localhost:${PORT}`); 
   }
);