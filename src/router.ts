import { Router, Request, Response } from 'express';
import DellAnalyzer from './dellAnalyzer';
import Crowller from './crowller';

const router = Router();
interface CustomRequest extends Request {
  body: {
    [key: string]: string | undefined;
  };
}

router.get('/', (req: Request, res: Response) => {
  res.send(`<html>
  <body>
    <form method='post' action='/getData'>
      <input type='password' name='password' />
      <button>提交</button>
    </form>
  <body>
  </html>`);
});
router.post('/getData', (req: CustomRequest, res: Response) => {
  if (req.body.password === '123') {
    // https://git.imooc.com/coding-412/source-code 密码更新地址
    const secret = 'secretKey';
    const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
    const anylyzer = DellAnalyzer.getInstance();
    new Crowller(url, anylyzer);
    res.send('getData success');
  } else {
    res.send(`${req.studentName} getData Error`);
  }
});

export default router;
