import { Request, Response, NextFunction } from "express";

export default async function jwtAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return false;
}
