import fs from 'fs';
import path from 'path';
import { Router, Request, Response, NextFunction } from 'express';
import Analyzer from './utils/analyzer';
import Crowller from './utils/crowller';
import { getReponseData } from './utils/util';

const router = Router();
interface CustomRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

const checkIfLogin = (req: Request, res: Response, next: NextFunction) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    next();
  } else {
    res.json(getReponseData(false, 'Please login in at first'));
  }
};

router.get('/', (req: CustomRequest, res: Response) => {
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
});

router.get('/logout', (req: CustomRequest, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
    res.redirect('/');
  }
});

router.post('/login', (req: CustomRequest, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.json(getReponseData(false, 'already login'));
  } else {
    if (password === '123' && req.session) {
      req.session.login = true;
      res.json(getReponseData(true));
    } else {
      res.json(getReponseData(false, 'login fail'));
    }
  }
});

router.get('/getData', checkIfLogin, (req: CustomRequest, res: Response) => {
  // https://git.imooc.com/coding-412/source-code 密码更新地址
  const secret = 'secretKey';
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
  const anylyzer = Analyzer.getInstance();
  new Crowller(url, anylyzer);
  res.json(getReponseData(true));
});

router.get('/showData', checkIfLogin, (req: CustomRequest, res: Response) => {
  try {
    const position = path.resolve(__dirname, '../data/course.json');
    const content = fs.readFileSync(position, 'utf8');
    res.json(getReponseData(JSON.parse(content)));
  } catch {
    res.json(getReponseData(false, 'no content'));
  }
});

export default router;
