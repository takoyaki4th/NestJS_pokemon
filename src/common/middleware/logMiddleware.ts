import { Injectable } from '@nestjs/common';

@Injectable()
export class LogMiddleware {
  use(req, res, next) {
    console.log(req.method,req.url);
    next();
  }
}
