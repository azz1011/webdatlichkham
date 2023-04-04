import  Express  from "express";
import homeController from "../controller/homeController";
let router = Express.Router();

let iniWebRouter = (app) => {
    
    router.get('/', homeController.getHomePage);
    router.get('/aboutus', homeController.getAboutUs);
        

    // rest API
    return app.use("/",router);
}
module.exports = iniWebRouter;