// import fs from "fs";
// import path from "path";
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

// const checkIfLogin = (req: Request, res: Response, next: NextFunction) => {
//   const isLogin = req.session ? req.session.login : false;
//   if (isLogin) {
//     next();
//   } else {
//     res.json(getReponseData(false, "Please login in at first"));
//   }
// };

// router.get("/getData", checkIfLogin, (req: CustomRequest, res: Response) => {
//   // https://git.imooc.com/coding-412/source-code 密码更新地址
//   const secret = "secretKey";
//   const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
//   const anylyzer = Analyzer.getInstance();
//   new Crowller(url, anylyzer);
//   res.json(getReponseData(true));
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
