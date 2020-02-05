import { Router, Request, Response } from 'express';
import DellAnalyzer from './dellAnalyzer';
import Crowller from './crowller';
import fs from 'fs';
import path from 'path';

const router = Router();
interface CustomRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

router.get('/', (req: Request, res: Response) => {
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

router.get('/logout', (req: Request, res: Response) => {
  if (req.session) {
    req.session.login = undefined;
    res.redirect('/');
  }
});

router.post('/login', (req: Request, res: Response) => {
  const { password } = req.body;
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    res.send('already login');
  } else {
    if (password === '123' && req.session) {
      req.session.login = true;
      res.send('login success');
    } else {
      res.send('login fail');
    }
  }
});

router.get('/getData', (req: CustomRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    // https://git.imooc.com/coding-412/source-code 密码更新地址
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const anylyzer = DellAnalyzer.getInstance();
    new Crowller(url, anylyzer);
    res.send('getData success');
  } else {
    res.send('Please crawl content after login');
  }
});

router.get('/showData', (req: CustomRequest, res: Response) => {
  const isLogin = req.session ? req.session.login : false;
  if (isLogin) {
    try {
      const position = path.resolve(__dirname, '../data/course.json');
      const content = fs.readFileSync(position, 'utf8');
      res.send(content);
    } catch {
      res.send('crawl no content ever');
    }
  } else {
    res.send('Please login in at first!');
  }
});

export default router;
