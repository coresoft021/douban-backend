import { Request, Response, Router } from "express";

const publicRouter: Router = Router();

              
               



publicRouter.get("/about", (request: Request, response: Response) => {
  
  response.json({
    Devoloper: "Premji Thankaji",
    Framework: "A6.0 + sequlize + nodejs",
  });
  

});

publicRouter.get("/server", (request: Request, response: Response) => {
  
  response.json({     Status : "Running"

              });

})








export { publicRouter };
