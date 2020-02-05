import { Router, Request, Response } from 'express';
import DellAnalyzer from './dellAnalyzer';
import Crowller from './crowller';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});
router.get('/getData', (req: Request, res: Response) => {
  // https://git.imooc.com/coding-412/source-code 密码更新地址
  const secret = 'secretKey';
  const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
  const anylyzer = DellAnalyzer.getInstance();
  new Crowller(url, anylyzer);
  res.send('getData success');
});

export default router;
