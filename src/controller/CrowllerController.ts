import fs from "fs";
import path from "path";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorator";
import { getReponseData } from "../utils/util";

import Analyzer from "../utils/analyzer";
import Crowller from "../utils/crowller";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

const checkIfLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getReponseData(false, "Please login in at first"));
  }
};

@controller
class CrowllerController {
  @get("/getData")
  @use(checkIfLogin)
  getData(req: BodyRequest, res: Response) {
    // https://git.imooc.com/coding-412/source-code 密码更新地址
    const secret = "secretKey";
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const anylyzer = Analyzer.getInstance();
    new Crowller(url, anylyzer);
    res.json(getReponseData(true));
  }

  @get("/showData")
  @use(checkIfLogin)
  showData(req: BodyRequest, res: Response) {
    try {
      const position = path.resolve(__dirname, "../../data/course.json");
      const content = fs.readFileSync(position, "utf8");
      res.json(getReponseData(JSON.parse(content)));
    } catch {
      res.json(getReponseData(false, "no content"));
    }
  }
}
