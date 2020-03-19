
// import { Router, Request, Response, NextFunction } from "express";
// import Analyzer from "./utils/analyzer";
// import Crowller from "./utils/crowller";
// import { getReponseData } from "./utils/util";

// const router = Router();
// interface CustomRequest extends Request {
//   body: {
//     [key: string]: string | undefined;
//   };
// }


// router.get("/getData", checkIfLogin, (req: CustomRequest, res: Response) => {

// });

// router.get("/showData", checkIfLogin, (req: CustomRequest, res: Response) => {
//   try {
//     const position = path.resolve(__dirname, "../data/course.json");
//     const content = fs.readFileSync(position, "utf8");
//     res.json(getReponseData(JSON.parse(content)));
//   } catch {
//     res.json(getReponseData(false, "no content"));
//   }
// });

// export default router;
