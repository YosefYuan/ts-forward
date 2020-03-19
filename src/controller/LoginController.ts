import "reflect-metadata";
import { Request, Response } from "express";
import { controller, get, post } from "./decorator";
import { getReponseData } from "../utils/util";
interface BodyRequest extends Request {
  body: { [key: string]: string | undefined };
}

@controller
class LoginController {
  @post("/login")
  login(req: BodyRequest, res: Response) {
    const { password } = req.body;
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.json(getReponseData(false, "already login"));
    } else {
      if (password === "123" && req.session) {
        req.session.login = true;
        res.json(getReponseData(true));
      } else {
        res.json(getReponseData(false, "login fail"));
      }
    }
  }

  @get("/logout")
  logout(req: BodyRequest, res: Response) {
    if (req.session) {
      req.session.login = undefined;
    }
    res.json(getReponseData(true));
  }

  @get("/")
  home(req: BodyRequest, res: Response) {
    const isLogin = req.session ? req.session.login : false;
    if (isLogin) {
      res.send(`<html>
    <body>
      <a href='/getData'>爬取内容</a> 
      <a href='/showData'>展示内容</a>
      <a href='/logout'>退出</a>
    <body>
    </html>`);
    } else {
      res.send(`<html>
    <body>
      <form method='post' action='/login'>
        <input type='password' name='password' />
        <button>登录</button>
      </form>
    <body>
    </html>`);
    }
  }
}
