import { NextFunction, Request, Response } from "express"
import * as jwt from 'jsonwebtoken'

export class Auth {
  public Auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ? req.headers.authorization.split("Bearer ")[1] : null
    if (token == null) return res.status(401).send({ message: "Token inValid" });

    jwt.verify(token, "secret", (err: any,decoded:any) => {
      if (err) return res.status(403).send({ message: "Unauthorized User Token inValid" })
      res.locals.jwt=decoded
      next()
    })
  }
}